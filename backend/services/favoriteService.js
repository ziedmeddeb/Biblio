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
    // async deleteFavorite(id){
    //     const deletedFavorite=await Favorite.findByIdAndDelete(id);
    //     return deletedFavorite;
    // },
    // async updateFavorite(id,data){
    //     const favorite = await Favorite.findByIdAndUpdate(id,data,{new:true});
    //     return favorite;
    // },
    // async addBookToFavorite(id,book){
    //     const favorite = await Favorite.findById(id);
        
    //     if(favorite.books.length==0) {
    //         console.log(favorite.books);
    //         favorite.books.push({book:book});
    //         console.log(favorite.books);
    //         favorite.save();
           
    //     }
    //     else{
            
    //     if(favorite.books.findIndex((b)=>b.book==book)==-1){
    //         favorite.books.push({book:book});
    //         favorite.save();
        
    //     }

        
    //     else
    //     {throw new Error('Book already exists in favorite');}
    // }
    // return favorite;
        
        
    // },
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