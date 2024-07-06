import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: string;
  description: string;
  url_link: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  url_link: { type: String, required: false },
}, { timestamps: true });

export default mongoose.model<IProduct>('product', ProductSchema);