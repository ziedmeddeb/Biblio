const mongoose=require('mongoose');
const loanSchema=new mongoose.Schema({
    loanDate:{
        type:Date,
        required:true,
    },
    returnDate:{
        type:Date,
        required:true,
    },
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book',
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
});
const Loan=mongoose.model('Loan',loanSchema);
module.exports=Loan;