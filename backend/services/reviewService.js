const Review= require('../models/Review');
const reviewService = {
    getReviews: async () => {
        const reviews = await Review.find();
        return reviews;
    }
    ,
    addReview: async (review) => {
        const newReview = await Review.create(review);
        return newReview;
    }
    ,
    deleteReview: async (id) => {
        const deletedReview = await Review.findByIdAndDelete(id);
        return deletedReview;
    },
    //get review by id
    getReviewById: async (id) => {
        const review = await Review.findById(id);
        return review;
    }
    ,
    //update review
    updateReview: async (id, data) => {
        const review = await Review.findByIdAndUpdate(id,data,{new:true});
        return review;
    }
}
module.exports = reviewService;
        