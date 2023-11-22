const mongoose = require('mongoose');

const LivreSchema = new mongoose.Schema({
    libelle:{
        type: String,
        required: true,
        
    },
    genre:{
        type: String,
        required: true,
        
    },
    auteur:{
        type: String,
        required: true,
        
    },

    dateSortie:{
        type: Date,
        required: true,
    },
    image:{
        type: String,
       
    },
    });
    const Livre = mongoose.model('Livre', LivreSchema);
    module.exports = Livre;

    

