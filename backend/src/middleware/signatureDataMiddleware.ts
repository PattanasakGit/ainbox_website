import { Request, Response, NextFunction } from 'express';

interface SignatureData {
  body: string;
  signature: string;
  destination: string;
}

declare global {
  namespace Express {
    interface Request {
      signatureData?: SignatureData;
    }
  }
}

export const signatureDataMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { body, signature, destination } = req.body;
  
  if (body && signature && destination) {
    req.signatureData = { body, signature, destination };
  }
  
  next();
};