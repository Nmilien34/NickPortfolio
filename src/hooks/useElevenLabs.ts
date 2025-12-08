import { useState, useCallback, useEffect } from 'react';
import { useConversation } from '@elevenlabs/react';

interface ElevenLabsConfig {
  backendUrl?: string; // Backend API URL
  agentId?: string; // Agent ID for WebSocket connection
}

type ConnectionState = 'idle' | 'connecting' | 'connected' | 'processing' | 'speaking';

export function useElevenLabs(config?: ElevenLabsConfig) {
  const [connectionState, setConnectionState] = useState<ConnectionState>('idle');
  const [error, setError] = useState<string | null>(null);
  const [agentId, setAgentId] = useState<string | null>(null);

  // Get agent ID from backend
  useEffect(() => {
    const fetchAgentId = async () => {
      if (config?.agentId) {
        setAgentId(config.agentId);
        return;
      }

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
          setAgentId(data.agentId);
        } else {
          setError('Failed to get agent ID from backend');
        }
      } catch (err) {
        console.error('Error getting agent ID:', err);
        setError('Failed to connect to backend');
      }
    };

    fetchAgentId();
  }, [config?.agentId, config?.backendUrl]);

  // Use the official ElevenLabs React SDK
  // Note: The SDK handles authentication automatically through the backend
  const conversation = useConversation({
    onConnect: () => {
      console.log('✅ Connected to ElevenLabs');
      setConnectionState('connected');
      setError(null);
    },
    onDisconnect: () => {
      console.log('🔌 Disconnected from ElevenLabs');
      setConnectionState('idle');
    },
    onMessage: (message: any) => {
      console.log('📨 Message received:', message);
      // Handle different message types
      if (message.type === 'agent_response' || message.type === 'audio') {
        setConnectionState('speaking');
      } else if (message.type === 'user_transcript' || message.type === 'tentative_user_transcript') {
        setConnectionState('processing');
      }
    },
    onError: (message: string, context?: any) => {
      console.error('❌ ElevenLabs error:', message, context);
      setError(message || 'An error occurred');
      setConnectionState('idle');
    },
  });

  const connectAndStartRecording = useCallback(async () => {
    if (!agentId) {
      setError('Agent ID not available. Please wait...');
      return;
    }

    try {
      setError(null);
      setConnectionState('connecting');

      // Request microphone permission first
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start the conversation session
      // The SDK will use WebSocket by default
      await conversation.startSession({
        agentId: agentId,
        connectionType: 'websocket', // Use WebSocket for real-time communication
      });
    } catch (err) {
      console.error('Failed to start conversation:', err);
      setError(err instanceof Error ? err.message : 'Failed to start conversation');
      setConnectionState('idle');
    }
  }, [agentId, conversation]);

  const disconnect = useCallback(async () => {
    try {
      await conversation.endSession();
      setConnectionState('idle');
    } catch (err) {
      console.error('Error ending session:', err);
    }
  }, [conversation]);

  const toggleConnection = useCallback(() => {
    if (connectionState === 'idle') {
      connectAndStartRecording();
    } else {
      disconnect();
    }
  }, [connectionState, connectAndStartRecording, disconnect]);

  // Computed states
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
    conversation, // Expose the conversation object for advanced usage
  };
}
