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
      
      // Step 1: Try different methods to create/start conversation
      // The 405 error suggests the endpoint exists but POST might need different format
      let createdConversationId = null;
      let lastError = null;
      
      // Try 1: POST with different body format
      const tryCreateConversation = async (endpoint: string, body: any, method = 'POST') => {
        try {
          console.log(`Trying ${method} to create conversation at:`, endpoint);
          const createResponse = await fetch(endpoint, {
            method: method,
            headers: {
              'xi-api-key': apiKey,
              'Content-Type': 'application/json',
            },
            body: method === 'POST' ? JSON.stringify(body) : undefined,
          });
          
          if (createResponse.ok) {
            const convData = await createResponse.json() as any;
            return convData.conversation_id || convData.id || convData.conversationId || convData;
          } else {
            const errorText = await createResponse.text();
            console.log(`Failed ${method} at`, endpoint, ':', createResponse.status, errorText);
            return null;
          }
        } catch (err) {
          console.log('Error trying', endpoint, ':', err);
          return null;
        }
      };
      
      // Try various endpoint formats and body structures
      const attempts = [
        { endpoint: `https://api.elevenlabs.io/v1/convai/conversations`, body: { agent_id: agentId }, method: 'POST' },
        { endpoint: `https://api.elevenlabs.io/v1/convai/conversations`, body: { agentId: agentId }, method: 'POST' },
        { endpoint: `https://api.elevenlabs.io/v1/convai/conversations?agent_id=${agentId}`, body: {}, method: 'POST' },
        { endpoint: `https://api.elevenlabs.io/v1/convai/agents/${agentId}/conversations`, body: {}, method: 'POST' },
      ];
      
      for (const attempt of attempts) {
        const result = await tryCreateConversation(attempt.endpoint, attempt.body, attempt.method);
        if (result) {
          createdConversationId = typeof result === 'string' ? result : (result.conversation_id || result.id);
          if (createdConversationId) {
            console.log('Successfully created conversation:', createdConversationId);
            break;
          }
        }
      }
      
      if (!createdConversationId) {
        // If we can't create a conversation, try sending audio directly with agent_id
        // Maybe conversations are auto-created when you send the first message
        console.log('Could not create conversation via REST. Trying to send audio directly with agent_id...');
        
        const agentFormData = new FormData();
        agentFormData.append('agent_id', agentId);
        agentFormData.append('audio', req.file.buffer, {
          filename: req.file.originalname || 'audio.webm',
          contentType: req.file.mimetype || 'audio/webm',
        });
        
        // Try sending directly - maybe conversation is auto-created
        const directEndpoints = [
          `https://api.elevenlabs.io/v1/convai/agents/${agentId}/message`,
          `https://api.elevenlabs.io/v1/convai/conversations?agent_id=${agentId}`,
          `https://api.elevenlabs.io/v1/convai/message?agent_id=${agentId}`,
        ];
        
        let directSuccess = false;
        for (const directEndpoint of directEndpoints) {
          try {
            console.log('Trying direct send to:', directEndpoint);
            const directResponse = await fetch(directEndpoint, {
              method: 'POST',
              headers: {
                'xi-api-key': apiKey,
                ...agentFormData.getHeaders(),
              },
              body: agentFormData,
            });
            
            if (directResponse.ok) {
              endpoint = directEndpoint;
              requestBody = agentFormData;
              directSuccess = true;
              console.log('Direct send worked at:', directEndpoint);
              break;
            } else {
              const errorText = await directResponse.text();
              console.log('Direct send failed at', directEndpoint, ':', directResponse.status, errorText);
            }
          } catch (err) {
            console.log('Error trying direct send to', directEndpoint, ':', err);
          }
        }
        
        if (!directSuccess) {
          return res.status(500).json({
            error: 'Could not create conversation or send message directly',
            details: 'Please check ElevenLabs API documentation for the correct endpoint to send audio with an agent_id. The API might require WebRTC instead of REST.',
            suggestion: 'Look for "POST" endpoints that accept agent_id and audio file'
          });
        }
      } else {
        // Step 2: Send audio to the created conversation
        // Use plural form to match API pattern: /v1/convai/conversations/:id
        endpoint = `https://api.elevenlabs.io/v1/convai/conversations/${createdConversationId}/user_message`;
        finalConversationId = createdConversationId;
      }
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

