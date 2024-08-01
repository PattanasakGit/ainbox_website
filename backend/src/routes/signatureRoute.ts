import express, { Request, Response } from 'express';
import { signatureStore } from '../utils/signatureStore';

const router = express.Router();

router.post('/getSignature', (req: Request, res: Response) => {
  const { body, destination, signature } = req.body;

  if (!signature) {
    return res.status(400).json({ error: "ggggggggggggggg" });
  }

  const signatureData = {
    body,
    signature,
    destination
  };

  signatureStore.set(signatureData);

  console.log('Received from AI service:');
  console.log('Body:', signatureData.body);
  console.log('Signature:', signatureData.signature);
  console.log('Destination:', signatureData.destination);

  res.status(200).json({ message: 'Signature data received successfully' });
});

export default router;