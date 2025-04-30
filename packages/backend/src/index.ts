import express, { Request, Response } from 'express';
import cors from 'cors';
import { __TEST_CONSTANT__ } from '@yarn-ts-monorepo/common/constants/debug';
import { defaultMessage } from './defaultMessage.js';

const app = express();
const port = 5000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(express.json());

// Demo endpoint
app.get('/api/messages', (req: Request, res: Response) => {
  res.json(defaultMessage);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
