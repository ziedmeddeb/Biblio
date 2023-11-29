const Loan=require('../models/Loan');
const Book=require('../models/Book');
const loanService={
    async getAllLoans(){
        const loans=await Loan.find();
        return loans;
    }
    ,
    async addLoan(loan){
        const oldLoan= await Loan.findOne({user:loan.user,book:loan.book});
        if(oldLoan) {throw new Error("Loan already exists");
    }
        else{
        const newloan=await Loan.create(loan);
        var book=await Book.findById(loan.book);
        if(!book) throw new Error("Book not found");
        else if(book.quantity<1) throw new Error("Book is not available");
        book.quantity--;
        await book.save();
        return newloan;
        }
    }
    ,
    async deleteLoan(id){
        const deletedloan=await Loan.findByIdAndDelete(id);
        var book=await Book.findById(deletedloan.book);
        if(!book) throw new Error("Book not found");
        book.quantity++;
        await book.save();
        return deletedloan;
    },
    async updateLoan(id,data){
        const loan = await Loan.findByIdAndUpdate(id,data,{new:true});
        return loan;
    },



    async getLoansByUser(id){
        const loans=await Loan.find({user:id}).populate('book');
        return loans;
    },


};
module.exports=loanService;