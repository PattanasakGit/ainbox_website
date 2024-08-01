import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import router from './routes/authRoute';
import signatureRoute from './routes/signatureRoute';
import { authMiddleware, AuthRequest } from './middleware/authMiddleware';
import dotenv from 'dotenv';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

dotenv.config();

const app: Application = express();

// Security middlewares
app.use(helmet());

// CORS configuration
const allowedOrigins = [process.env.FRONTEND_URL, process.env.AI_SERVER_URL];
app.use(cors({
  origin: function(origin, callback) {
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'X-Line-Signature', 'Authorization']
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
app.use(bodyParser.json({ 
  verify: (req: any, res, buf) => {
    req.rawBody = buf.toString();
  }
}));

// Routes
app.use('/api', router);
app.use('/api', signatureRoute);

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
});

const database = process.env.DATABASE;
const password = process.env.PASSWORD;
const port = process.env.PORT || 3002;

// Connect to MongoDB
mongoose
  .connect(`mongodb+srv://navapols:${password}@atlascluster.bc0euhx.mongodb.net/${database}?retryWrites=true&w=majority&appName=AtlasCluster`)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB', err));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default app;