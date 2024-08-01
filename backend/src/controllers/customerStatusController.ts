import e, { Request, Response } from 'express';
import CustomerStatus from '../models/customerStatusModel';

export const createCustomerStatus = async (req: Request, res: Response) => {
  try {
    const { line_user_id, page_id } = req.body;
    const newCustomerStatus = new CustomerStatus({
      line_user_id,
      page_id,
      status: 1 // Default value set to 1
    });
    await newCustomerStatus.save();
    res.status(201).json({ message: 'Customer status created successfully', customerStatus: newCustomerStatus });
  } catch (err) {
    console.error('Error creating customer status:', err);
    res.status(500).json({ error: 'Failed to create customer status' });
  }
}