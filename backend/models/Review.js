const mongoose= require('mongoose');

const reviewSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;