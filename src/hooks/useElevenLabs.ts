import { useState, useRef, useEffect } from 'react';

interface ElevenLabsConfig {
  backendUrl?: string; // Backend API URL
  agentId?: string; // Agent ID for WebSocket connection
}

type ConnectionState = 'idle' | 'connecting' | 'connected' | 'processing' | 'speaking';

export function useElevenLabs(config?: ElevenLabsConfig) {
  const [connectionState, setConnectionState] = useState<ConnectionState>('idle');
  const [error, setError] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const websocketRef = useRef<WebSocket | null>(null);

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
      disconnect();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Get WebSocket URL from backend (signed URL if needed, or direct URL)
  const getWebSocketUrl = async (): Promise<string> => {
    let backendUrl = config?.backendUrl;
    if (!backendUrl) {
      if (import.meta.env.PROD) {
        backendUrl = 'https://nickportfolio.onrender.com';
      } else {
        backendUrl = 'http://localhost:5000';
      }
    }
    
    // First try to get signed URL (for private agents)
    try {
      const signedUrlResponse = await fetch(`${backendUrl}/api/elevenlabs/signed-url`);
      if (signedUrlResponse.ok) {
        const data = await signedUrlResponse.json();
        if (data.signedUrl) {
          console.log('✅ Using signed URL for WebSocket');
          return data.signedUrl;
        }
      }
    } catch (err) {
      console.warn('Could not get signed URL, trying direct connection:', err);
    }
    
    // Fallback: get agent ID and construct direct URL
    let agentId = config?.agentId;
    if (!agentId) {
      try {
        const agentIdResponse = await fetch(`${backendUrl}/api/elevenlabs/agent-id`);
        if (agentIdResponse.ok) {
          const data = await agentIdResponse.json();
          agentId = data.agentId;
        }
      } catch (err) {
        console.error('Error getting agent ID:', err);
        throw new Error('Failed to get agent ID from backend');
      }
    }
    
    if (!agentId) {
      throw new Error('Agent ID not configured');
    }
    
    // Direct WebSocket URL (for public agents)
    return `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${agentId}`;
  };

  const connectAndStartRecording = async () => {
    try {
      setError(null);
      setConnectionState('connecting');

      // Step 1: Get WebSocket URL
      const wsUrl = await getWebSocketUrl();
      console.log('🔌 Connecting to ElevenLabs WebSocket:', wsUrl);

      // Step 2: Get microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      // Step 3: Connect WebSocket
      const ws = new WebSocket(wsUrl);
      websocketRef.current = ws;

      ws.onopen = () => {
        console.log('✅ WebSocket connected to ElevenLabs');
        setConnectionState('connected');

        // Step 4: Start recording and stream audio in real-time
        const mediaRecorder = new MediaRecorder(stream, {
          mimeType: 'audio/webm;codecs=opus'
        });
        mediaRecorderRef.current = mediaRecorder;

        // Send audio chunks as they're recorded (real-time streaming)
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0 && ws.readyState === WebSocket.OPEN) {
            console.log('📤 Sending audio chunk:', event.data.size, 'bytes');
            // Send as binary data
            ws.send(event.data);
            setConnectionState('processing');
          }
        };

        // Start recording with timeslice to get chunks frequently
        mediaRecorder.start(100); // Get chunks every 100ms for real-time streaming
      };

      ws.onmessage = (event) => {
        console.log('📨 WebSocket message received:', event.data instanceof Blob ? 'Blob' : typeof event.data);
        
        // Handle incoming audio response
        if (event.data instanceof Blob) {
          setConnectionState('speaking');
          const audioUrl = URL.createObjectURL(event.data);
          if (audioElementRef.current) {
            audioElementRef.current.src = audioUrl;
            audioElementRef.current.play();
            audioElementRef.current.onended = () => {
              URL.revokeObjectURL(audioUrl);
              setConnectionState('connected'); // Back to connected state after speaking
            };
          }
        } else if (typeof event.data === 'string') {
          // Handle text messages (transcripts, events, etc.)
          try {
            const data = JSON.parse(event.data);
            console.log('📝 WebSocket event:', data);
            
            // Handle different event types
            if (data.type === 'agent_response' || data.type === 'audio') {
              setConnectionState('speaking');
            } else if (data.type === 'user_transcript' || data.type === 'tentative_user_transcript') {
              setConnectionState('processing');
            }
          } catch (e) {
            console.error('Error parsing WebSocket message:', e);
          }
        }
      };

      ws.onerror = (error) => {
        console.error('❌ WebSocket error:', error);
        setError('Failed to connect to ElevenLabs. Please try again.');
        setConnectionState('idle');
        disconnect();
      };

      ws.onclose = (event) => {
        console.log('🔌 WebSocket closed:', event.code, event.reason);
        setConnectionState('idle');
        websocketRef.current = null;
        disconnect();
      };

    } catch (err) {
      console.error('Error connecting:', err);
      setError(err instanceof Error ? err.message : 'Failed to connect');
      setConnectionState('idle');
      disconnect();
    }
  };

  const disconnect = () => {
    // Stop recording
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    
    // Close WebSocket
    if (websocketRef.current) {
      websocketRef.current.close();
      websocketRef.current = null;
    }
    
    // Stop microphone
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    
    setConnectionState('idle');
  };

  const toggleConnection = () => {
    if (connectionState === 'idle') {
      connectAndStartRecording();
    } else {
      disconnect();
    }
  };

  // Computed states for backward compatibility
  const isRecording = connectionState === 'connected' || connectionState === 'processing';
  const isProcessing = connectionState === 'processing';
  const isConnecting = connectionState === 'connecting';
  const isConnected = connectionState === 'connected';
  const isSpeaking = connectionState === 'speaking';

  return {
    isRecording,
    isProcessing,
    isConnecting,
    isConnected,
    isSpeaking,
    connectionState,
    error,
    toggleRecording: toggleConnection,
    connect: connectAndStartRecording,
    disconnect,
  };
}
