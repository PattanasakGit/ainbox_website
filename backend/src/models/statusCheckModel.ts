import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IStatusCheck extends Document {
    page_id: string;
    status: number;
}

const StatusCheckSchema: Schema = new Schema({
    page_id: { type: String, required: true },
    status: { type: Number, required: true },
}, {versionKey: false});

mongoose.pluralize(null);
const StatusCheck: Model<IStatusCheck> = mongoose.model<IStatusCheck>('status_check', StatusCheckSchema);
export default StatusCheck;
