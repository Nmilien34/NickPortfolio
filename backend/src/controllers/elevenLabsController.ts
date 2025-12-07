import { Request, Response } from 'express';
import FormData from 'form-data';
import fetch from 'node-fetch';

export async function sendAudioToElevenLabs(req: Request, res: Response) {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    const agentId = process.env.ELEVENLABS_AGENT_ID;
    const conversationId = process.env.ELEVENLABS_CONVERSATION_ID;

    if (!apiKey) {
      return res.status(500).json({ error: 'ElevenLabs API key not configured' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No audio file provided' });
    }

    // Create form data to send to ElevenLabs
    const formData = new FormData();
    formData.append('audio', req.file.buffer, {
      filename: req.file.originalname || 'audio.webm',
      contentType: req.file.mimetype || 'audio/webm',
    });

    let endpoint = '';
    
    // Determine endpoint based on what's configured
    if (conversationId) {
      endpoint = `https://api.elevenlabs.io/v1/convai/conversation/${conversationId}/user_message`;
    } else if (agentId) {
      // If using agent ID, we might need to create/start a conversation first
      // This is a simplified version - adjust based on ElevenLabs API docs
      endpoint = `https://api.elevenlabs.io/v1/convai/conversation?agent_id=${agentId}`;
    } else {
      return res.status(500).json({ error: 'Either agent ID or conversation ID must be configured' });
    }

    // Forward the request to ElevenLabs
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        ...formData.getHeaders(),
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('ElevenLabs API error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: `ElevenLabs API error: ${response.status}`,
        details: errorText 
      });
    }

    // Get the audio response from ElevenLabs
    const audioBuffer = await response.buffer();
    
    // Send the audio back to the frontend
    res.set({
      'Content-Type': response.headers.get('content-type') || 'audio/mpeg',
      'Content-Length': audioBuffer.length.toString(),
    });
    
    res.send(audioBuffer);

  } catch (error) {
    console.error('Error processing ElevenLabs request:', error);
    res.status(500).json({ 
      error: 'Failed to process audio',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

