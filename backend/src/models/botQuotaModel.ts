import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBotQuota extends Document {
    page_id: string;
    quota: number;
}

const BotQuotaSchema: Schema = new Schema({
    page_id: { type: String, required: true },
    quota: { type: Number, required: true },
}, {versionKey: false});

mongoose.pluralize(null);
const BotQuota: Model<IBotQuota> = mongoose.model<IBotQuota>('bot_quota', BotQuotaSchema);
export default BotQuota;