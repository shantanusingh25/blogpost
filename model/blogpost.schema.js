const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Blog post must have a title."],
    trim: true,
    minlength: [3, "Title must be at least 3 characters."],
    maxlength: [100, "Title must be under 100 characters."],
    index: true, // allows faster search by title
  },
  description: {
    type: String,
    required: [true, "Blog post must have a description."],
    trim: true,
    minlength: [5, "Description must be at least 5 characters."],
  },
  author: {
    type: String,
    trim: true,
    default: "Anonymous", // fallback value if not provided
  }
}, {
  timestamps: true // createdAt and updatedAt
});

// Optional: Indexing createdAt for sorting
blogPostSchema.index({ createdAt: -1 });

const BlogPost = mongoose.model("BlogPost", blogPostSchema);
module.exports = BlogPost;
