import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
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
