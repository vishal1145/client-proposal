import mongoose, { Schema, Document } from "mongoose";

interface ISubscriber extends Document {
  email: string;
  subscribedAt: Date;
}

const SubscriberSchema = new Schema<ISubscriber>({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Subscriber || mongoose.model<ISubscriber>("Subscriber", SubscriberSchema);
