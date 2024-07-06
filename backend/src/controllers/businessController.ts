import { Request, Response } from 'express';
import Business, { IBusiness } from '../models/businessModel';

export const createBusiness = async (req: Request, res: Response) => {
  try {
    const businessData: IBusiness = req.body;
    const newBusiness = new Business(businessData);
    await newBusiness.save();
    res.status(201).json({ message: 'Business data saved successfully', business: newBusiness });
  } catch (err) {
    console.error('Error saving business data:', err);
    res.status(500).json({ error: 'Failed to save business data' });
  }
};