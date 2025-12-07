import express from 'express';
import cors from 'cors';
import { helloRouter } from './routes/hello.js';
import { elevenLabsRouter } from './routes/elevenLabs.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/hello', helloRouter);
app.use('/api/elevenlabs', elevenLabsRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
