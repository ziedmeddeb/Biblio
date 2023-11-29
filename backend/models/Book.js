const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        
    },
    type:{
        type: String,
        required: true,
        
    },
    author:{
        type: String,
        required: true,
        
    },

    releaseDate:{
        type: Date,
        required: true,
    },
    image:{
        type: String,
       
    },
    description:{
        type: String,
    },
    quantity:{
        type: Number,
        required: true,
    },
    });
    const Book = mongoose.model('Book', BookSchema);
    module.exports = Book;

    

