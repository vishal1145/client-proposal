import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  featured: { type: Boolean, default: false },
  icon: { type: String, required: true }, // Store as a string (SVG or URL)
});

export default mongoose.models.Service || mongoose.model("Service", ServiceSchema);
