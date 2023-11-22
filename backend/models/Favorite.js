const mongoose=require('mongoose');
const FavoriteSchema=new mongoose.Schema({
    books:

    [{
        book:{
            type:mongoose.Schema.Types.ObjectId,
        ref:'Book',
        required:true,
        }
        
    }]
,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
});
const Favorite=mongoose.model('Favorite',FavoriteSchema);
module.exports=Favorite;