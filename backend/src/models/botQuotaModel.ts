import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBotQuota extends Document {
    user_id: string;
    page: Array<{ page_id: string }>;
    quota: number;
}

const PageSchema = new Schema({
    page_id: String
}, { _id: false }); 

const BotQuotaSchema: Schema = new Schema({
    user_id: { type: String, required: true },
    page: [PageSchema],
    quota: { type: Number, required: true },
}, {versionKey: false});

mongoose.pluralize(null);
const BotQuota: Model<IBotQuota> = mongoose.model<IBotQuota>('bot_quota', BotQuotaSchema);
export default BotQuota;