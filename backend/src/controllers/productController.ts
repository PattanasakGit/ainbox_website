import { Request, Response } from 'express';
import Product, { IProduct } from '../models/productModel';

// Create a new product
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

// Get products by business ID
export const getProducts = async (req: Request, res: Response) => {
  try {
    const { businessId } = req.params;
    const products = await Product.find({ business_id: businessId });
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Get a product by its ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

// Update a product by its ID
export const updateProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData: Partial<IProduct> = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

// Delete a product by its ID
export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};
