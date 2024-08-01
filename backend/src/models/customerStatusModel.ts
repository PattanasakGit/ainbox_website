import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICustomerStatus extends Document {
    line_user_id: string;
    page_id: string;
    status: number;
}

const CustomerStatusSchema: Schema = new Schema({
    line_user_id: { type: String, required: true },
    page_id: { type: String, required: true },
    status: { type: Number, required: true },
}, {versionKey: false});

mongoose.pluralize(null);
const CustomerStatus: Model<ICustomerStatus> = mongoose.model<ICustomerStatus>('customer_status', CustomerStatusSchema);
export default CustomerStatus;