import { useState, useRef, useEffect } from 'react';

interface ElevenLabsConfig {
  backendUrl?: string; // Backend API URL
}

export function useElevenLabs(config?: ElevenLabsConfig) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

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

  const processAudio = async (audioBlob: Blob) => {
    setIsProcessing(true);
    setError(null);

    try {
      // Create form data to send to backend
      const formData = new FormData();
      formData.append('audio', audioBlob, 'audio.webm');

      // Backend endpoint - defaults to localhost:5000, but can be configured
      const backendUrl = config?.backendUrl || 'http://localhost:5000';
      const endpoint = `${backendUrl}/api/elevenlabs/audio`;

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header - browser will set it with boundary for FormData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(`Backend error: ${response.status} - ${errorData.error || 'Unknown error'}`);
      }

      // Get the audio response from backend
      const audioBlobResponse = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlobResponse);
      
      if (audioElementRef.current) {
        audioElementRef.current.src = audioUrl;
        await audioElementRef.current.play();
        
        // Clean up URL after playback
        audioElementRef.current.onended = () => {
          URL.revokeObjectURL(audioUrl);
        };
      }

      setIsProcessing(false);
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

