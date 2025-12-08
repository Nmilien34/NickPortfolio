import { Router } from 'express';
import multer from 'multer';
import fetch from 'node-fetch';
import { sendAudioToElevenLabs } from '../controllers/elevenLabsController.js';

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

