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

        ws.onopen = () => {
          console.log('WebSocket connected');
          
          // Send audio blob as binary data
          // Convert blob to ArrayBuffer and send
          audioBlob.arrayBuffer().then(buffer => {
            ws.send(buffer);
            // Close after sending
            setTimeout(() => {
              ws.close();
              resolve();
            }, 1000);
          });
        };

        ws.onmessage = (event) => {
          // Handle incoming audio response
          if (event.data instanceof Blob) {
            const audioUrl = URL.createObjectURL(event.data);
            if (audioElementRef.current) {
              audioElementRef.current.src = audioUrl;
              audioElementRef.current.play();
              audioElementRef.current.onended = () => {
                URL.revokeObjectURL(audioUrl);
                setIsProcessing(false);
              };
            }
          } else if (typeof event.data === 'string') {
            // Handle text messages (transcripts, etc.)
            console.log('WebSocket message:', event.data);
            try {
              const data = JSON.parse(event.data);
              if (data.audio) {
                // Handle base64 audio if needed
                const audioBlob = new Blob([Uint8Array.from(atob(data.audio), c => c.charCodeAt(0))], { type: 'audio/mpeg' });
                const audioUrl = URL.createObjectURL(audioBlob);
                if (audioElementRef.current) {
                  audioElementRef.current.src = audioUrl;
                  audioElementRef.current.play();
                }
              }
            } catch (e) {
              console.error('Error parsing WebSocket message:', e);
            }
          }
        };

        ws.onerror = (error) => {
          console.error('WebSocket error:', error);
          setError('Failed to connect to ElevenLabs');
          setIsProcessing(false);
          reject(error);
        };

        ws.onclose = () => {
          console.log('WebSocket closed');
          websocketRef.current = null;
          setIsProcessing(false);
        };
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

