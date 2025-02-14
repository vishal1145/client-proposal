import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema(
  {
    proposal: {
      type: String,
      required: true,
    },
    analysisId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Analysis',
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Proposal = mongoose.model("Proposal", proposalSchema);

export default Proposal;
