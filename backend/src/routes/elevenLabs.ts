import { Router } from 'express';
import multer from 'multer';
import fetch from 'node-fetch';
import { sendAudioToElevenLabs } from '../controllers/elevenLabsController.js';
import { CEDRICK_PROMPT } from '../config/agentPrompt.js';

const router = Router();

// Configure multer for in-memory file storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept audio files
    if (file.mimetype.startsWith('audio/')) {
      cb(null, true);
    } else {
      cb(new Error('Only audio files are allowed'));
    }
  },
});

// Route to handle audio uploads to ElevenLabs (legacy - will return WebRTC token)
router.post('/audio', upload.single('audio'), sendAudioToElevenLabs);

// Route to get agent ID (for frontend WebSocket connection)
router.get('/agent-id', async (req, res) => {
  try {
    const agentId = process.env.ELEVENLABS_AGENT_ID || process.env.VITE_ELEVENLABS_AGENT_ID;
    
    if (!agentId) {
      return res.status(500).json({ error: 'ElevenLabs agent ID not configured' });
    }
    
    return res.json({ agentId });
  } catch (error) {
    console.error('Error getting agent ID:', error);
    return res.status(500).json({ 
      error: 'Failed to get agent ID',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Route to get the current agent prompt/instructions
router.get('/agent-prompt', async (req, res) => {
  try {
    // Get prompt from environment variable, config file, or use default
    const prompt = process.env.ELEVENLABS_AGENT_PROMPT || CEDRICK_PROMPT;
    
    return res.json({ prompt });
  } catch (error) {
    console.error('Error getting agent prompt:', error);
    return res.status(500).json({ 
      error: 'Failed to get agent prompt',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Route to update agent configuration with backend-controlled prompt
router.post('/update-agent-config', async (req, res) => {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY || process.env.ELEVEN_LABS_API_KEY || process.env.VITE_ELEVENLABS_API_KEY;
    const agentId = process.env.ELEVENLABS_AGENT_ID || process.env.VITE_ELEVENLABS_AGENT_ID;

    if (!apiKey) {
      return res.status(500).json({ error: 'ElevenLabs API key not configured' });
    }

    if (!agentId) {
      return res.status(500).json({ error: 'ElevenLabs agent ID not configured' });
    }

    // Get prompt from request body, environment variable, or config file
    const prompt = req.body.prompt || process.env.ELEVENLABS_AGENT_PROMPT || CEDRICK_PROMPT;

    // First, get the current agent configuration
    const getAgentResponse = await fetch(`https://api.elevenlabs.io/v1/convai/agents/${agentId}`, {
      method: 'GET',
      headers: {
        'xi-api-key': apiKey,
      },
    });

    if (!getAgentResponse.ok) {
      const errorText = await getAgentResponse.text();
      console.error('Failed to get agent config:', errorText);
      return res.status(getAgentResponse.status).json({ 
        error: 'Failed to get agent configuration',
        details: errorText
      });
    }

    const agentData = await getAgentResponse.json() as any;
    console.log('Current agent data structure:', JSON.stringify(agentData, null, 2));

    // Update the agent with backend-controlled prompt
    // This will override whatever is in the dashboard
    // Try different possible structures for the prompt field
    const updatePayload: any = {
      ...agentData,
    };

    // Try different prompt field structures based on ElevenLabs API
    if (agentData.prompt) {
      // If prompt exists as an object
      updatePayload.prompt = {
        ...agentData.prompt,
        prompt: prompt,
      };
    } else if (agentData.instructions) {
      // If it's called instructions
      updatePayload.instructions = prompt;
    } else if (agentData.system_prompt) {
      // If it's called system_prompt
      updatePayload.system_prompt = prompt;
    } else {
      // Try adding it as a new field
      updatePayload.prompt = {
        prompt: prompt,
      };
    }

    console.log('Updating agent with payload:', JSON.stringify(updatePayload, null, 2));

    const updateAgentResponse = await fetch(`https://api.elevenlabs.io/v1/convai/agents/${agentId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatePayload),
    });

    if (!updateAgentResponse.ok) {
      const errorText = await updateAgentResponse.text();
      console.error('Failed to update agent config:', errorText);
      return res.status(updateAgentResponse.status).json({ 
        error: 'Failed to update agent configuration',
        details: errorText
      });
    }

    const updatedAgent = await updateAgentResponse.json();
    console.log('✅ Agent configuration updated with backend prompt');

    return res.json({ 
      success: true,
      message: 'Agent configuration updated',
      agent: updatedAgent
    });
  } catch (error) {
    console.error('Error updating agent configuration:', error);
    return res.status(500).json({ 
      error: 'Failed to update agent configuration',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Route to get signed URL for WebSocket (if agent requires authorization)
router.get('/signed-url', async (req, res) => {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY || process.env.ELEVEN_LABS_API_KEY || process.env.VITE_ELEVENLABS_API_KEY;
    const agentId = process.env.ELEVENLABS_AGENT_ID || process.env.VITE_ELEVENLABS_AGENT_ID;

    if (!apiKey) {
      return res.status(500).json({ error: 'ElevenLabs API key not configured' });
    }

    if (!agentId) {
      return res.status(500).json({ error: 'ElevenLabs agent ID not configured' });
    }

    // Update agent config with backend prompt before getting signed URL
    // This ensures the agent uses backend-controlled prompts
    try {
      const prompt = process.env.ELEVENLABS_AGENT_PROMPT || CEDRICK_PROMPT;
      
      const getAgentResponse = await fetch(`https://api.elevenlabs.io/v1/convai/agents/${agentId}`, {
        method: 'GET',
        headers: {
          'xi-api-key': apiKey,
        },
      });

      if (getAgentResponse.ok) {
        const agentData = await getAgentResponse.json() as any;
        
        // Update agent with backend prompt
        const updatePayload: any = { ...agentData };
        
        // Try different prompt field structures
        if (agentData.prompt) {
          updatePayload.prompt = { ...agentData.prompt, prompt: prompt };
        } else if (agentData.instructions) {
          updatePayload.instructions = prompt;
        } else if (agentData.system_prompt) {
          updatePayload.system_prompt = prompt;
        } else {
          updatePayload.prompt = { prompt: prompt };
        }
        
        await fetch(`https://api.elevenlabs.io/v1/convai/agents/${agentId}`, {
          method: 'POST',
          headers: {
            'xi-api-key': apiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatePayload),
        });
      }
    } catch (updateError) {
      console.warn('Could not update agent config before signed URL (non-critical):', updateError);
      // Continue anyway - signed URL will still work
    }

    // Get signed URL for WebSocket connection
    const signedUrlResponse = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${agentId}`, {
      method: 'GET',
      headers: {
        'xi-api-key': apiKey,
      },
    });

    if (!signedUrlResponse.ok) {
      const errorText = await signedUrlResponse.text();
      return res.status(signedUrlResponse.status).json({ 
        error: 'Failed to get signed URL',
        details: errorText
      });
    }

    const signedUrlData = await signedUrlResponse.json() as { signed_url: string };
    return res.json({ signedUrl: signedUrlData.signed_url });
  } catch (error) {
    console.error('Error getting signed URL:', error);
    return res.status(500).json({ 
      error: 'Failed to get signed URL',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// New route to get WebRTC token (if needed for other purposes)
router.get('/token', async (req, res) => {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY || process.env.ELEVEN_LABS_API_KEY || process.env.VITE_ELEVENLABS_API_KEY;
    const agentId = process.env.ELEVENLABS_AGENT_ID || process.env.VITE_ELEVENLABS_AGENT_ID;

    if (!apiKey) {
      return res.status(500).json({ error: 'ElevenLabs API key not configured' });
    }

    if (!agentId) {
      return res.status(500).json({ error: 'ElevenLabs agent ID not configured' });
    }

    const tokenResponse = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/token?agent_id=${agentId}`, {
      method: 'GET',
      headers: {
        'xi-api-key': apiKey,
      },
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      return res.status(tokenResponse.status).json({ 
        error: 'Failed to get WebRTC token',
        details: errorText
      });
    }

    const tokenData = await tokenResponse.json() as { token: string };
    return res.json({ token: tokenData.token });
  } catch (error) {
    console.error('Error getting WebRTC token:', error);
    return res.status(500).json({ 
      error: 'Failed to get WebRTC token',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export { router as elevenLabsRouter };
