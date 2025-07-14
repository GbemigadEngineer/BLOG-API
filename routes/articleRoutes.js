const express = require('express');
const { getAllArticles, createNewArticle, getArticleById, updateArticleById, deleteArticleById } = require('../controller/articleController');


const router = express.Router();


// handling routes for articles

router.route('/article')
    .get(getAllArticles) // Get all articles
    .post(createNewArticle); // Create a new article
router.route('/article/:id')
    .get(getArticleById) // Get a single article by ID
    .patch(updateArticleById) // Update an article by ID
    .delete(deleteArticleById) // Delete an article by ID





// exporting the router
module.exports = router;