const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        
    },
    gender:{
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
    });
    const Book = mongoose.model('Book', BookSchema);
    module.exports = Book;

    

