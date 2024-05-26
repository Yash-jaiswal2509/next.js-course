import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
});

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;