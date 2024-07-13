import { Request, Response } from 'express';
import Business, { IBusiness } from '../models/businessModel';

// Create a new business
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

// Get businesses by user ID
export const getBusinesses = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const businesses = await Business.find({ user_id: userId });
    res.status(200).json(businesses);
  } catch (err) {
    console.error('Error fetching businesses:', err);
    res.status(500).json({ error: 'Failed to fetch businesses' });
  }
}

// Get a business by its ID
export const getBusinessById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const business = await Business.findById(id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.status(200).json(business);
  } catch (err) {
    console.error('Error fetching business:', err);
    res.status(500).json({ error: 'Failed to fetch business' });
  }
}

// Update a business by its ID
export const updateBusinessById = async (req: Request, res: Response) => { 
  try {
    const { id } = req.params;
    const updateData: Partial<IBusiness> = req.body;
    const updatedBusiness = await Business.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!updatedBusiness) {
      return res.status(404).json({ message: 'Business not found' });
    } 
    res.status(200).json({ message: 'Business updated successfully', business: updatedBusiness });
  } catch (err) {
    console.error('Error updating business:', err);
    res.status(500).json({ error: 'Failed to update business' });
  }
};

// Delete a business by its ID
export const deleteBusinessById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const business = await Business.findByIdAndDelete(id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.status(200).json({ message: 'Business deleted successfully' });
  } catch (err) {
    console.error('Error deleting business:', err);
    res.status(500).json({ error: 'Failed to delete business' });
  }
};