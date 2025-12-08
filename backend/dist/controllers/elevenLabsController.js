import FormData from 'form-data';
import fetch from 'node-fetch';
export async function sendAudioToElevenLabs(req, res) {
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
            // Based on API pattern: 
            // - GET /v1/convai/conversations/:conversation_id/audio (get audio)
            // - POST /v1/convai/conversations/:conversation_id/feedback (send feedback)
            // So user message likely follows: POST /v1/convai/conversations/:conversation_id/user-message
            // Try multiple patterns
            const userMessageEndpoints = [
                `https://api.elevenlabs.io/v1/convai/conversations/${conversationId}/user-message`, // Most likely (matches feedback pattern)
                `https://api.elevenlabs.io/v1/convai/conversations/${conversationId}/user_message`,
                `https://api.elevenlabs.io/v1/convai/conversations/${conversationId}/message`,
            ];
            // Try each endpoint until one works
            let foundEndpoint = false;
            for (const msgEndpoint of userMessageEndpoints) {
                try {
                    const testResponse = await fetch(msgEndpoint, {
                        method: 'POST',
                        headers: {
                            'xi-api-key': apiKey,
                            ...formData.getHeaders(),
                        },
                        body: formData,
                    });
                    if (testResponse.ok || testResponse.status === 200) {
                        endpoint = msgEndpoint;
                        requestBody = formData;
                        foundEndpoint = true;
                        console.log('Found working user-message endpoint:', msgEndpoint);
                        break;
                    }
                    else {
                        const errorText = await testResponse.text();
                        console.log(`User message endpoint ${msgEndpoint} failed:`, testResponse.status, errorText);
                    }
                }
                catch (err) {
                    console.log(`Error testing user message endpoint ${msgEndpoint}:`, err);
                }
            }
            if (!foundEndpoint) {
                // Default to most likely pattern
                endpoint = `https://api.elevenlabs.io/v1/convai/conversations/${conversationId}/user-message`;
            }
        }
        else if (agentId) {
            // ElevenLabs Conversational AI might use WebSockets or a different REST format
            // Try creating conversation first, then sending message
            console.log('Creating conversation with agent:', agentId);
            // Step 1: Try different methods to create/start conversation
            // The 405 error suggests the endpoint exists but POST might need different format
            let createdConversationId = null;
            let lastError = null;
            // Try different methods to create/start conversation
            const tryCreateConversation = async (endpoint, body, method = 'POST') => {
                try {
                    console.log(`Trying ${method} to create conversation at:`, endpoint);
                    const headers = {
                        'xi-api-key': apiKey,
                    };
                    if (method === 'POST' && Object.keys(body).length > 0) {
                        headers['Content-Type'] = 'application/json';
                    }
                    const createResponse = await fetch(endpoint, {
                        method: method,
                        headers: headers,
                        body: method === 'POST' && Object.keys(body).length > 0 ? JSON.stringify(body) : undefined,
                    });
                    if (createResponse.ok) {
                        const convData = await createResponse.json();
                        console.log('Response data:', JSON.stringify(convData).substring(0, 200));
                        // Try to extract conversation ID from various possible formats
                        if (typeof convData === 'string') {
                            return convData;
                        }
                        if (Array.isArray(convData) && convData.length > 0) {
                            // If it's an array, maybe take the first conversation
                            const first = convData[0];
                            return first.conversation_id || first.id || first.conversationId || first;
                        }
                        return convData.conversation_id || convData.id || convData.conversationId || convData;
                    }
                    else {
                        const errorText = await createResponse.text();
                        console.log(`Failed ${method} at`, endpoint, ':', createResponse.status, errorText);
                        return null;
                    }
                }
                catch (err) {
                    console.log('Error trying', endpoint, ':', err);
                    return null;
                }
            };
            // Try various endpoint formats and body structures to CREATE a conversation
            // Based on the feedback endpoint pattern, conversations are at /v1/convai/conversations/:id
            // So creation might be POST /v1/convai/conversations with agent_id
            const attempts = [
                // Try GET first to see if we can list existing conversations or see structure
                { endpoint: `https://api.elevenlabs.io/v1/convai/conversations?agent_id=${agentId}`, body: {}, method: 'GET' },
                // Try POST with agent_id in body
                { endpoint: `https://api.elevenlabs.io/v1/convai/conversations`, body: { agent_id: agentId }, method: 'POST' },
                { endpoint: `https://api.elevenlabs.io/v1/convai/conversations`, body: { agentId: agentId }, method: 'POST' },
                // Try POST with agent_id as query param
                { endpoint: `https://api.elevenlabs.io/v1/convai/conversations?agent_id=${agentId}`, body: {}, method: 'POST' },
                // Try creating via agent endpoint
                { endpoint: `https://api.elevenlabs.io/v1/convai/agents/${agentId}/conversations`, body: {}, method: 'POST' },
                // Try start or create endpoints
                { endpoint: `https://api.elevenlabs.io/v1/convai/agents/${agentId}/start-conversation`, body: {}, method: 'POST' },
                { endpoint: `https://api.elevenlabs.io/v1/convai/agents/${agentId}/create-conversation`, body: {}, method: 'POST' },
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
                // ElevenLabs Conversational AI uses WebSocket/WebRTC for real-time communication
                // REST endpoints do not exist for sending audio - must use WebSocket on frontend
                console.log('ElevenLabs API requires WebSocket for audio. REST endpoints not available.');
                // Return error explaining that WebSocket must be used on frontend
                return res.status(400).json({
                    error: 'ElevenLabs Conversational AI requires WebSocket connection',
                    message: 'Audio must be sent via WebSocket on the frontend, not REST API from backend.',
                    solution: 'Use the /api/elevenlabs/agent-id endpoint to get the agent ID, then connect to wss://api.elevenlabs.io/v1/convai/conversation?agent_id={agent_id} from the frontend.',
                    note: 'Pre-recorded audio files cannot be sent via REST. Use real-time WebSocket connection.'
                });
            }
        }
        else {
            return res.status(500).json({ error: 'Either agent ID or conversation ID must be configured' });
        }
        // This code should never be reached if we're using WebSocket
        // But keeping it for backwards compatibility in case conversation ID is provided
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
    }
    catch (error) {
        console.error('Error processing ElevenLabs request:', error);
        res.status(500).json({
            error: 'Failed to process audio',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}
