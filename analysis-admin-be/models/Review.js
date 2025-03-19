const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  place: { type: String, required: true },
  companyname: { type: String, required: true },
  review: { type: String, required: true },
  percentage: { type: Number, required: true },
  status: {
    type: String,
    enum: ["accept", "reject", "pending"],
    default: "pending",
    required: true,
  },
  createdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);
