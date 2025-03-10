import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    companyName: {
      type: String,
    },
    industry: {
      type: String,
    },
    domain: {
      type: String,
    },
    personalityType: {
      type: String,
    },
    decisionMakerName: {
      type: String,
    },
    decisionMakerPosition: {
      type: String,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    links: [{}],
    allServices: [{}],
  },
  {
    timestamps: true,
  }
);

const Analysis = mongoose.model("Analysis", analysisSchema);

export default Analysis;
