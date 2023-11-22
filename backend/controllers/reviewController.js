const asyncHandler = require("express-async-handler");
const express = require('express');
const reviewService = require('../services/reviewService');
const protectUser = require("../middleware/userAuth");

const reviewController = express.Router();

reviewController.get('/', asyncHandler(async (req, res) => {
    const reviews = await reviewService.getReviews();
    res.json(reviews);
}));

reviewController.post('/',protectUser, asyncHandler(async (req, res) => {
    const review = await reviewService.addReview(req.body);
    res.json(review);
}));

reviewController.delete('/:id', asyncHandler(async (req, res) => {
    const review = await reviewService.deleteReview(req.params.id);
    res.json(review);
}));

reviewController.get('/:id', asyncHandler(async (req, res) => {
    const review = await reviewService.getReviewById(req.params.id);
    res.json(review);
}));

reviewController.put('/:id', asyncHandler(async (req, res) => {
    const review = await reviewService.updateReview(req.params.id, req.body);
    res.json(review);
}));

module.exports = reviewController;
