import { useState, useRef, useEffect } from 'react';

interface ElevenLabsConfig {
  backendUrl?: string; // Backend API URL
  agentId?: string; // Agent ID for WebSocket connection
}

export function useElevenLabs(config?: ElevenLabsConfig) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const websocketRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioQueueRef = useRef<Blob[]>([]);

  // Initialize audio element for playback
  useEffect(() => {
    audioElementRef.current = new Audio();
    return () => {
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current = null;
      }
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopRecording();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await processAudio(audioBlob);
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      setError('Could not access microphone. Please check permissions.');
      console.error('Error starting recording:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  // Get agent ID from backend or config
  const getAgentId = async (): Promise<string> => {
    if (config?.agentId) {
      return config.agentId;
    }
    
    // Try to get from backend
    let backendUrl = config?.backendUrl;
    if (!backendUrl) {
      if (import.meta.env.PROD) {
        backendUrl = 'https://nickportfolio.onrender.com';
      } else {
        backendUrl = 'http://localhost:5000';
      }
    }
    
    try {
      const response = await fetch(`${backendUrl}/api/elevenlabs/agent-id`);
      if (response.ok) {
        const data = await response.json();
        return data.agentId;
      }
    } catch (err) {
      console.error('Error getting agent ID:', err);
    }
    
    throw new Error('Agent ID not configured');
  };

  const processAudio = async (audioBlob: Blob) => {
    setIsProcessing(true);
    setError(null);

    try {
      // ElevenLabs uses WebSocket for audio communication
      // Connect to: wss://api.elevenlabs.io/v1/convai/conversation?agent_id={agent_id}
      
      const agentId = await getAgentId();
      const wsUrl = `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${agentId}`;
      
      console.log('Connecting to ElevenLabs WebSocket:', wsUrl);

      return new Promise<void>((resolve, reject) => {
        const ws = new WebSocket(wsUrl);
        websocketRef.current = ws;
        
        let audioChunks: Blob[] = [];
        let connectionTimeout: NodeJS.Timeout;

        ws.onopen = () => {
          console.log('✅ WebSocket connected to ElevenLabs');
          clearTimeout(connectionTimeout);
          
          // Convert audio blob to ArrayBuffer and send
          // For real-time streaming, we might need to send in chunks
          // But for now, send the entire blob
          audioBlob.arrayBuffer().then(async (buffer) => {
            console.log('Sending audio data:', buffer.byteLength, 'bytes');
            
            // Try sending as binary (most common for audio)
            ws.send(buffer);
            
            // Also try sending as a JSON event with audio data
            // Some WebSocket APIs expect JSON events
            try {
              const audioBase64 = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                  const result = reader.result as string;
                  const base64 = result.split(',')[1];
                  resolve(base64);
                };
                reader.onerror = reject;
                reader.readAsDataURL(audioBlob);
              });
              
              // Send as JSON event (if the API expects this format)
              ws.send(JSON.stringify({
                type: 'audio',
                data: audioBase64
              }));
            } catch (e) {
              console.warn('Could not convert audio to base64:', e);
            }
            
            // Set timeout to close if no response
            setTimeout(() => {
              if (ws.readyState === WebSocket.OPEN) {
                console.log('No response received, closing connection');
                ws.close();
                resolve();
              }
            }, 10000); // 10 second timeout
          });
        };

        ws.onmessage = (event) => {
          console.log('📨 WebSocket message received:', event.data instanceof Blob ? 'Blob' : typeof event.data);
          
          // Handle incoming audio response
          if (event.data instanceof Blob) {
            audioChunks.push(event.data);
            console.log('Received audio chunk:', event.data.size, 'bytes');
            
            // If we have enough chunks or this is the last one, play it
            // For now, play each chunk as it arrives
            const audioUrl = URL.createObjectURL(event.data);
            if (audioElementRef.current) {
              // Create a new audio element for each chunk or concatenate
              const audio = new Audio(audioUrl);
              audio.play();
              audio.onended = () => {
                URL.revokeObjectURL(audioUrl);
              };
            }
          } else if (typeof event.data === 'string') {
            // Handle text messages (transcripts, events, etc.)
            console.log('WebSocket text message:', event.data);
            try {
              const data = JSON.parse(event.data);
              console.log('Parsed message:', data);
              
              // Handle different message types
              if (data.type === 'audio' || data.audio) {
                // Handle base64 audio
                const audioData = data.audio || data.data;
                const audioBlob = new Blob(
                  [Uint8Array.from(atob(audioData), c => c.charCodeAt(0))], 
                  { type: 'audio/mpeg' }
                );
                const audioUrl = URL.createObjectURL(audioBlob);
                if (audioElementRef.current) {
                  audioElementRef.current.src = audioUrl;
                  audioElementRef.current.play();
                  audioElementRef.current.onended = () => {
                    URL.revokeObjectURL(audioUrl);
                  };
                }
              } else if (data.type === 'conversation_initiation_metadata' || data.type === 'agent_response') {
                // Handle conversation events
                console.log('Conversation event:', data);
              }
            } catch (e) {
              console.error('Error parsing WebSocket message:', e, event.data);
            }
          }
        };

        ws.onerror = (error) => {
          console.error('❌ WebSocket error:', error);
          setError('Failed to connect to ElevenLabs WebSocket. Check console for details.');
          setIsProcessing(false);
          clearTimeout(connectionTimeout);
          reject(error);
        };

        ws.onclose = (event) => {
          console.log('🔌 WebSocket closed:', event.code, event.reason);
          websocketRef.current = null;
          clearTimeout(connectionTimeout);
          
          // If we collected audio chunks, combine and play them
          if (audioChunks.length > 0) {
            const combinedAudio = new Blob(audioChunks, { type: 'audio/mpeg' });
            const audioUrl = URL.createObjectURL(combinedAudio);
            if (audioElementRef.current) {
              audioElementRef.current.src = audioUrl;
              audioElementRef.current.play();
              audioElementRef.current.onended = () => {
                URL.revokeObjectURL(audioUrl);
                setIsProcessing(false);
              };
            }
          } else {
            setIsProcessing(false);
          }
          
          resolve();
        };
        
        // Connection timeout
        connectionTimeout = setTimeout(() => {
          if (ws.readyState !== WebSocket.OPEN) {
            console.error('WebSocket connection timeout');
            setError('Connection timeout. Please try again.');
            ws.close();
            setIsProcessing(false);
            reject(new Error('Connection timeout'));
          }
        }, 5000);
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process audio');
      setIsProcessing(false);
      console.error('Error processing audio:', err);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return {
    isRecording,
    isProcessing,
    error,
    toggleRecording,
    startRecording,
    stopRecording,
  };
}

