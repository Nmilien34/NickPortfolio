import { Request, Response } from 'express';
import FormData from 'form-data';
import fetch from 'node-fetch';

export async function sendAudioToElevenLabs(req: Request, res: Response) {
  try {
    // Check for both naming conventions (with/without underscore, with/without VITE_ prefix)
    const apiKey = process.env.ELEVENLABS_API_KEY || process.env.ELEVEN_LABS_API_KEY || process.env.VITE_ELEVENLABS_API_KEY;
    const agentId = process.env.ELEVENLABS_AGENT_ID || process.env.VITE_ELEVENLABS_AGENT_ID;
    const conversationId = process.env.ELEVENLABS_CONVERSATION_ID || process.env.VITE_ELEVENLABS_CONVERSATION_ID;

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

    console.log('ElevenLabs Config:', { 
      hasApiKey: !!apiKey, 
      agentId, 
      conversationId,
      fileSize: req.file.size,
      fileType: req.file.mimetype
    });

    let endpoint = '';
    let requestBody = formData;
    let finalConversationId = conversationId;
    
    // Determine endpoint based on what's configured
    if (conversationId) {
      // If we have a conversation ID, send message to existing conversation
      endpoint = `https://api.elevenlabs.io/v1/convai/conversation/${conversationId}/user_message`;
    } else if (agentId) {
      // Step 1: Create a conversation with the agent first
      console.log('Creating conversation with agent:', agentId);
      const createConversationResponse = await fetch('https://api.elevenlabs.io/v1/convai/conversation', {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent_id: agentId,
        }),
      });

      if (!createConversationResponse.ok) {
        const createErrorText = await createConversationResponse.text();
        console.error('Failed to create conversation:', {
          status: createConversationResponse.status,
          error: createErrorText
        });
        return res.status(createConversationResponse.status).json({
          error: `Failed to create conversation: ${createConversationResponse.status}`,
          details: createErrorText
        });
      }

      const conversationData = await createConversationResponse.json();
      finalConversationId = conversationData.conversation_id || conversationData.id || conversationData.conversationId;
      console.log('Created conversation:', finalConversationId);

      if (!finalConversationId) {
        return res.status(500).json({
          error: 'Failed to get conversation ID from response',
          details: JSON.stringify(conversationData)
        });
      }

      // Step 2: Send the audio message to the conversation
      endpoint = `https://api.elevenlabs.io/v1/convai/conversation/${finalConversationId}/user_message`;
    } else {
      return res.status(500).json({ error: 'Either agent ID or conversation ID must be configured' });
    }

    console.log('Calling ElevenLabs endpoint:', endpoint, 'with conversationId:', finalConversationId);

    // Forward the request to ElevenLabs
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        ...requestBody.getHeaders(),
      },
      body: requestBody,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('ElevenLabs API error:', {
        status: response.status,
        statusText: response.statusText,
        url: endpoint,
        error: errorText,
        headers: Object.fromEntries(response.headers.entries())
      });
      return res.status(response.status).json({ 
        error: `ElevenLabs API error: ${response.status}`,
        details: errorText,
        endpoint: endpoint
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

