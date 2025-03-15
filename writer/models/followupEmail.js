import mongoose from "mongoose";

const followupEmailSchema = new mongoose.Schema(
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
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["sent", "failed"],
      default: "sent",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const FollowupEmail = mongoose.model("FollowupEmail", followupEmailSchema);

export default FollowupEmail;
