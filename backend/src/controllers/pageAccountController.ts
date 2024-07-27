import { Request, Response } from 'express';
import PageAccount from '../models/pageAccountModel';

export const createPageAccount = async (req: Request, res: Response) => {
  try {
    const pageAccount = req.body;
    const newPageAccount = new PageAccount(pageAccount);
    await newPageAccount.save();
    res.status(201).json({ message: 'Page account created successfully', pageAccount: newPageAccount });
  } catch (err) {
    console.error('Error creating page account:', err);
    res.status(500).json({ error: 'Failed to create page account' });
  }
};