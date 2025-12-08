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
      // Based on API pattern: /v1/convai/conversations/:conversation_id/audio (GET)
      // Likely pattern for POST: /v1/convai/conversations/:conversation_id/user_message
      endpoint = `https://api.elevenlabs.io/v1/convai/conversations/${conversationId}/user_message`;
    } else if (agentId) {
      // ElevenLabs Conversational AI might use WebSockets or a different REST format
      // Try creating conversation first, then sending message
      console.log('Creating conversation with agent:', agentId);
      
      // Step 1: Try to create conversation
      // Based on API pattern showing /v1/convai/conversations/:id, try plural form
      const createEndpoints = [
        `https://api.elevenlabs.io/v1/convai/conversations`, // Most likely based on the pattern you showed
        `https://api.elevenlabs.io/v1/convai/agents/${agentId}/conversation`,
        `https://api.elevenlabs.io/v1/convai/conversation`,
      ];
      
      let createdConversationId = null;
      let lastError = null;
      
      for (const createEndpoint of createEndpoints) {
        try {
          console.log('Trying to create conversation at:', createEndpoint);
          const createResponse = await fetch(createEndpoint, {
            method: 'POST',
            headers: {
              'xi-api-key': apiKey,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ agent_id: agentId }),
          });
          
          if (createResponse.ok) {
            const convData = await createResponse.json() as any;
            createdConversationId = convData.conversation_id || convData.id || convData.conversationId;
            console.log('Successfully created conversation:', createdConversationId, 'at:', createEndpoint);
            break;
          } else {
            const errorText = await createResponse.text();
            console.log('Failed at', createEndpoint, ':', createResponse.status, errorText);
            lastError = errorText;
          }
        } catch (err) {
          console.log('Error trying', createEndpoint, ':', err);
          lastError = err instanceof Error ? err.message : 'Unknown error';
        }
      }
      
      if (!createdConversationId) {
        return res.status(500).json({
          error: 'Could not create conversation with agent',
          details: 'Tried multiple endpoint formats, all failed. Please check ElevenLabs API documentation for the correct endpoint format.',
          lastError: lastError
        });
      }
      
      // Step 2: Send audio to the created conversation
      // Use plural form to match API pattern: /v1/convai/conversations/:id
      endpoint = `https://api.elevenlabs.io/v1/convai/conversations/${createdConversationId}/user_message`;
      finalConversationId = createdConversationId;
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

