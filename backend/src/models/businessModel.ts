import mongoose, { Schema, Document } from 'mongoose';

export interface IBusiness extends Document {
  page_id: string;
  details: {
    ai_name: string;
    ai_behavior: string;
    ai_age: string;
    ai_gender: string;
    business_name: string;
    business_type: string;
    address: {
      detailedAddress: string;
      subdistrict: string;
      district: string;
      province: string;
      zipcode: string;
    };
    phone: string;
    email: string;
    website: string;
    opentime: {
      [key: string]: {
        open: boolean;
        from: string;
        to: string;
      };
    };
    description: string;
    product: Array<{
      name: string;
      price: string;
      description: string;
    }>;
  };
}

const BusinessSchema: Schema = new Schema({
  page_id: { type: String, required: true, unique: true },
  details: {
    ai_name: String,
    ai_behavior: String,
    ai_age: String,
    ai_gender: String,
    business_name: String,
    business_type: String,
    address: {
      detailedAddress: String,
      subdistrict: String,
      district: String,
      province: String,
      zipcode: String,
    },
    phone: String,
    email: String,
    website: String,
    opentime: {
      type: Map,
      of: {
        open: Boolean,
        from: String,
        to: String,
      },
    },
    description: String,
    product: [{
      name: String,
      price: String,
      description: String,
    }],
  },
});

export default mongoose.model<IBusiness>('business', BusinessSchema);