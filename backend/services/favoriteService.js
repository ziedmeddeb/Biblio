const Favorite=require('../models/Favorite');
const favoriteService={
    async getAllFavorites(){
        const favorites=await Favorite.find();
        return favorites;
    }
    ,
    async addFavorite(favorite){
        const newFavorite=await Favorite.create(favorite);
        return newFavorite;
    }
    ,
    async deleteFavorite(id){
        const deletedFavorite=await Favorite.findByIdAndDelete(id);
        return deletedFavorite;
    },
    async updateFavorite(id,data){
        const favorite = await Favorite.findByIdAndUpdate(id,data,{new:true});
        return favorite;
    },
    async addBookToFavorite(id,book){
        const favorite = await Favorite.findById(id);
        favorite.books.push(book);
        favorite.save();
        return favorite;
    }
   
};
module.exports=favoriteService;