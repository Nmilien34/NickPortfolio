import { Router } from 'express';

export const helloRouter = Router();

helloRouter.get('/', (req, res) => {
  res.json({
    message: 'Hello from the API!',
    timestamp: new Date().toISOString(),
  });
});
