const express=require('express');
const favoriteService=require('../services/favoriteService');
const favoriteController=express.Router();

favoriteController.get('/',async(req,res)=>{
    const favorites=await favoriteService.getAllFavorites();
    res.json(favorites);
}
);
favoriteController.post('/',async(req,res)=>{
    const favorite=await favoriteService.addFavorite(req.body);
    res.json(favorite);
}
);
favoriteController.delete('/:id',async(req,res)=>{
    const favorite=await favoriteService.deleteFavorite(req.params.id);
    res.json(favorite);
}
);
favoriteController.put('/:id',async(req,res)=>{
    
    const favorite=await favoriteService.updateFavorite(req.params.id,req.body);
    res.json(favorite);
}
);
favoriteController.put('/addBook/:id',async(req,res)=>{
    const favorite=await favoriteService.addBookToFavorite(req.params.id,req.body.book);
    res.json(favorite);
}
);
module.exports=favoriteController;