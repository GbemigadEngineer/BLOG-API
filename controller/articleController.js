"use strict";
const express = require("express");
const Article = require("../model/articleModel");

// Crete an article

const createNewArticle = async (req, res) => {
  try {
    // 1. Validation
    // 1a. Check if the required fields are present.
    if (!req.body.title || !req.body.content) {
      return res.status(400).json({
        status: "fail",
        message: "Title and content are required fields.",
      });
    }
    //2. Create new article with provided data after passing validation.
    const newArticle = await Article.create({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author || "Anonymous",
    });
    // 3. Send response
    res.status(201).json({
      status: "success",
      message: "Article created successfully",
      data: {
        article: newArticle,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error creating article",
      error: error.message,
    });
  }
};

// Get all articles

const getAllArticles = async (req, res) => {
  try {
    // 1. Fetch all articles from the database
    const articles = await Article.find();
    // 2. Send response
    res.status(200).json({
      status: "success",
      message: "All articles retrieved successfully",
      result: articles.length,
      data: {
        articles: articles,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error retrieving articles",
      error: error.message,
    });
    return;
  }
};

// Get a single article by ID

const getArticleById = async (req, res) => {
  try {
    // 1. Get the Id from the request parameters.
    const id = req.params.id;
    // 2. Validations
    // 2a. Check if ID provided is valid mongoose ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid article ID format",
      });
    }
    // 3. Find the article by ID
    const article = await Article.findById(id);
    // 4. Send response
    res.status(200).json({
      status: "success",
      message: `Article with ID ${req.params.id} retrieved successfully`,
      data: {
        article,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: `Article with ID ${req.params.id} not found`,
      error: error.message,
    });
  }
};

// Update an article by ID

const updateArticleById = async (req, res) => {
  try {
    // 1. Get the Id from the request parameters.
    if (!req.params.id) {
      return res.status(400).json({
        status: "fail",
        message: "Article ID is required for updating",
      });
    }
    const id = req.params.id;
    // 2. Validations
    // 2a. Check if ID provided is valid mongoose ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid article ID format",
      });
    }
    // 2b. check if ID exists in the database
    const articleExists = await Article.findById(id);
    if (!articleExists) {
      return res.status(404).json({
        status: "fail",
        message: `Article with ID ${id} not found`,
      });
    }
    // 3. Update the article with provided data
    // Note: We use `runValidators: true` to ensure that the update respects the schema validation rules.
    // This will also ensure that the title remains unique if it is being updated.
    const updatedArticle = await Article.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    // 4. Send response
    res.status(200).json({
      status: "success",
      message: `Article with ID ${req.params.id} updated successfully`,
      data: {
        article: updatedArticle,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: `Article with ID ${req.params.id} not found`,
      error: error.message,
    });
  }
};

// Delete an article by ID
const deleteArticleById = async (req, res) => {
  try {
    // 1. Get the Id from the request parameters.
    if (!req.params.id) {
      return res.status(400).json({
        status: "fail",
        message: "Article ID is required for deletion",
      });
    }
    const id = req.params.id;
    // 2. Validations
    // 2a. Check if ID provided is valid mongoose ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid article ID format",
      });
    }
    //3. Delete the article by ID
    await Article.findByIdAndDelete(id);
    // 4. Send response
    res.status(200).json({
      status: "success",
      message: `Article with ID ${req.params.id} deleted successfully`,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: `Article with ID ${req.params.id} not found`,
      error: error.message,
    });
  }
};

module.exports = {
  getAllArticles,
  createNewArticle,
  getArticleById,
  updateArticleById,
  deleteArticleById,
};
