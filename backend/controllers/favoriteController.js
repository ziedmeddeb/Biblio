const express=require('express');
const favoriteService=require('../services/favoriteService');
const favoriteController=express.Router();
const protectUser = require("../middleware/userAuth.js");

favoriteController.get('',async(req,res)=>{
    const favorites=await favoriteService.getAllFavorites();
    res.json(favorites);
}
);
favoriteController.post('',protectUser,async(req,res)=>{
    const favorite=await favoriteService.addFavorite(req.body);
    res.json(favorite);
}
);
favoriteController.delete('/:id',protectUser,async(req,res)=>{
    const favorite=await favoriteService.deleteFavorite(req.params.id);
    res.json(favorite);
}
);
favoriteController.put('/:id',protectUser,async(req,res)=>{
    
    const favorite=await favoriteService.updateFavorite(req.params.id,req.body);
    res.json(favorite);
}
);
favoriteController.put('/addBook/:id',protectUser,async(req,res)=>{
    try{ const favorite=await favoriteService.addBookToFavorite(req.params.id,req.body.book);
        res.json(favorite);}
        catch(err){
            res.status(400).json({message:err.message});
        }
   
}
);
favoriteController.put('/removeBook/:id',protectUser,async(req,res)=>{
    const favorite=await favoriteService.removeBookFromFavorite(req.params.id,req.body.book);
    res.json(favorite);
}
);
favoriteController.get('/user/:id',protectUser,async(req,res)=>{
    const favorite=await favoriteService.getFavoriteByUserId(req.params.id);
    res.json(favorite);
}
);
module.exports=favoriteController;