import { Request, Response } from 'express';
import TierStatus from '../models/tierStatusModel';

export const createTierStatus = async (req: Request, res: Response) => {
  try {
    const page_id = req.body;
    const newTierStatus = new TierStatus({
      page_id,
      tier: "EC1"
    });
    await newTierStatus.save();
    res.status(201).json({ message: 'Tier status created successfully', tierStatus: newTierStatus });
  } catch (err) {
    console.error('Error creating tier status:', err);
    res.status(500).json({ error: 'Failed to create tier status' });
  }
};