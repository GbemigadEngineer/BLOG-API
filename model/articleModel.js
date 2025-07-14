const mongoose = require("mongoose");

// Create a schema for the article

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "You cannot create an article without a title"],
      trim: true,
      maxLenght: [100, "Title cannot be more than 100 characters"],
      unique: [true, "Article title must be Unique"],
    },
    content: {
      type: String,
      required: [true, "You cannot create an article without content"],
      trim: true,
      maxLenght: [5000, "Content cannot be more than 5000 characters"],
    },
    author: {
      type: String,
      default: "Anonymous",
    },
  },
  { timestamps: true }
);

// Create a model from the schema
const Article = mongoose.model("Article", articleSchema);

// Export the model
module.exports = Article;
