import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    content: String,
    imageUrl: String,
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
