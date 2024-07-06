import { Request, Response } from 'express';
import Product, { IProduct } from '../models/productModel';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const productData: IProduct = req.body;
    const newProduct = new Product(productData);
    await newProduct.save();
    res.status(201).json({ message: 'Product data saved successfully', product: newProduct });
  } catch (err) {
    console.error('Error saving product data:', err);
    res.status(500).json({ error: 'Failed to save product data' });
  }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  };
 