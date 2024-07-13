import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITierStatus extends Document {
    page_id: string;
    tier: string;
}

const TierStatusSchema: Schema = new Schema({
    page_id: { type: String, required: true },
    tier: { type: String, required: true },
}, {versionKey: false});

mongoose.pluralize(null);
const TierStatus: Model<ITierStatus> = mongoose.model<ITierStatus>('tier_status', TierStatusSchema);
export default TierStatus;