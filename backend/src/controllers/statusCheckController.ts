import { Request, Response } from 'express';
import StatusCheck from '../models/statusCheckModel';

export const createStatusCheck = async (req: Request, res: Response) => {
  try {
    const page_id = req.body;
    const newStatusCheck = new StatusCheck({
      page_id,
      status: 1 // Default value set to 1
    });
    await newStatusCheck.save();
    res.status(201).json({ message: 'Status check created successfully', statusCheck: newStatusCheck });
  } catch (err) {
    console.error('Error creating status check:', err);
    res.status(500).json({ error: 'Failed to create status check' });
  }
};