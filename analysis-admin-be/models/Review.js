const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  place: { type: String, required: true },
  companyname: { type: String, required: true },
  review: { type: String, required: true },
  percentage: { type: Number, required: true },
   approval_status: {
    type: String,
    enum: ["approved", "rejected"],
    default: null, // Default value is null
  },
  createdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);
