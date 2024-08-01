// src/middleware/signatureMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import { IStore } from '../models/storedbModel';
import crypto from 'crypto';
import { signatureStore } from '../utils/signatureStore';

function verifySignature(body: string, signature: string, channelSecret: string): boolean {
  if (!body || !signature || !channelSecret) {
    console.log('Missing required data for signature verification');
    return false;
  }

  const hash = crypto.createHmac('sha256', channelSecret)
                     .update(body)
                     .digest('base64');
  console.log('Computed hash:', hash);
  console.log('Received signature:', signature);
  return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(signature));
}

export const signatureVerificationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { channel_secret } = req.body as IStore;

  const signatureData = signatureStore.get();

  console.log('Signature data:', signatureData);

  const { body, signature } = signatureData || {};

  if (!channel_secret) {
    return res.status(400).json({ error: "Missing channel_secret in request body" });
  }

  if (verifySignature(body!, signature!, channel_secret)) {
    console.log('Signature verified');
    next();
  } else {
    res.status(400).json({ error: "Invalid signature" });
  }
};