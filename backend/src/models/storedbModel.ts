import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IStore extends Document {
  line_user_id?: string;
  channel_secret?: string;
  page_access_token?: string;
  page_id: string;
  details: {
    ai_name: string;
    ai_behavior: string;
    ai_age: string;
    business_name: string;
    business_type: string;
    address: {
      detailedAddress: string;
      subdistrict?: string;
      district?: string;
      province?: string;
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
      url_link: string;
    }>;
    ai_gender: string;
  };
}

const StoreSchema: Schema = new Schema({
  page_id: { type: String, required: true },
  details: {
    ai_name: String,
    ai_behavior: String,
    ai_age: String,
    business_name: String,
    business_type: String,
    address: {
      detailedAddress: String,
      subdistrict: String,
      district: String,
      province: String,
      zipcode: String
    },
    phone: String,
    email: String,
    website: String,
    opentime: {
      type: Map,
      of: {
        open: Boolean,
        from: String,
        to: String
      }
    },
    description: String,
    product: [{
      name: String,
      price: String,
      description: String
    }],
    ai_gender: String
  }
}, { timestamps: true, versionKey: false });

mongoose.pluralize(null);
const Store: Model<IStore> = mongoose.model<IStore>('store_db', StoreSchema);
export default Store;