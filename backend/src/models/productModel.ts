import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  business_id: mongoose.Types.ObjectId;
  name: string;
  price: string;
  description: string;
  url_link: string;
}

const ProductSchema: Schema = new Schema({
  business_id: { type: mongoose.Schema.Types.ObjectId, ref: 'business', required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  url_link: { type: String, required: false },
}, { timestamps: true, versionKey: false});

mongoose.pluralize(null);
const Product: Model<IProduct> = mongoose.model<IProduct>('product', ProductSchema);
export default Product;