const Favorite=require('../models/Favorite');

const favoriteService={
    async getAllFavorites(){
        const favorites=await Favorite.find();
        return favorites;
    }
    ,
    async addFavorite(favorite){
        const oldFavorite= await Favorite.findOne({user:favorite.user,book:favorite.book});
        if(oldFavorite) {throw new Error("This books is already added to Favorite");
    }
        const newFavorite=await Favorite.create(favorite);
        return newFavorite;
    }
    ,
    
    async removeBookFromFavorite(userId,bookId){
        const favorite = await Favorite.findOneAndDelete({user:userId,book:bookId});
   
        return favorite;
    },
    async getFavoriteByUserId(id){
        const favorite = await Favorite.find({user:id}).populate('book');
        return favorite;
    }
   
};
module.exports=favoriteService;