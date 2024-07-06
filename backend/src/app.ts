import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import router from './routes/authRoute';
import { authMiddleware, AuthRequest } from './middleware/authMiddleware';
import dotenv from 'dotenv';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
dotenv.config();

const app: Application = express();

// Security middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3001',
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api', limiter);

// Logging
app.use(morgan('combined'));

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

// Middleware
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/api', router);

// Public route
app.get('/public', (req, res) => {
  res.json({ message: 'This is a public route' });
});

// Protected route
app.get('/protected', authMiddleware, (req: AuthRequest, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
});

const database = process.env.DATABASE;
const password = process.env.PASSWORD;
const port = process.env.PORT || 3002;

// Connect to MongoDB
mongoose
  .connect(`mongodb+srv://navapols:${password}@atlascluster.bc0euhx.mongodb.net/${database}?retryWrites=true&w=majority&appName=AtlasCluster`)
  // .connect(`mongodb+srv://navapols:${password}@cluster0.7lrhe8j.mongodb.net/${database}?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
      });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

export default app;