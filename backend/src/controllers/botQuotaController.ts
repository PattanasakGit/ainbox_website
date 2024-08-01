import { Request, Response } from 'express';
import BotQuota from '../models/botQuotaModel';

export const createBotQuota = async (req: Request, res: Response) => {
  try {
    const user_id = req.params.userId;
    const { page_id } = req.body;
    const newBotQuota = new BotQuota({
      user_id,
      page: [{ page_id }],
      quota: 1700
    });
    await newBotQuota.save();
    res.status(201).json({ message: 'Bot quota created successfully', botQuota: newBotQuota });
  } catch (err) {
    console.error('Error creating bot quota:', err);
    res.status(500).json({ error: 'Failed to create bot quota' });
  }
};