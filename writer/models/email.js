import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    to: {
      type: String,
      required: true,
    },
    serviceId: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      default: "Project Proposal",
    },
    status: {
      type: String,
      enum: ["sent", "failed"],
      default: "sent",
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Email = mongoose.model("Email", emailSchema);

export default Email;
