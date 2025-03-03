import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: String, required: true },
  mainImage: { type: String, required: true },
  fullContent: { type: [String], required: true },
  quote: {
    text: { type: String, required: true },
  },
  beforeAdditionalImage: { type: [String], default: [] },
  additionalImages: { type: [String], required: true },
  afterAdditionalImage: { type: [String], default: [] },
  testimonial: {
    text: { type: String, required: true },
  },
  displayOnHome: { type: Boolean, default: false },     // New property
  displayOnFooter: { type: Boolean, default: false }    // New property
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);