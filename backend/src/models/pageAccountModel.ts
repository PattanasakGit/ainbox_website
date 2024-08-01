import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPageAccount extends Document {
    platform: string;
    page_name: string;
    page_id: string;
    type: string;
    page_access_token: string;
    line_token?: string;
    channel_secret: string;
}

const PageAccountSchema: Schema = new Schema({
    platform: { type: String, required: true },
    page_name: { type: String, required: true },
    page_id: { type: String, required: true },
    type: { type: String, required: true },
    page_access_token: { type: String, required: true },
    line_token: { type: String, required: false },
    channel_secret: { type: String, required: true }
}, {versionKey: false});

mongoose.pluralize(null);
const PageAccount: Model<IPageAccount> = mongoose.model<IPageAccount>('page_account', PageAccountSchema);
export default PageAccount;