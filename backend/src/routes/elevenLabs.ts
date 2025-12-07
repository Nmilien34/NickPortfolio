import { Router } from 'express';
import multer from 'multer';
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

// Route to handle audio uploads to ElevenLabs
router.post('/audio', upload.single('audio'), sendAudioToElevenLabs);

export { router as elevenLabsRouter };

