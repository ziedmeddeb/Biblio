const Loan=require('../models/Loan');
const loanService={
    async getAllLoans(){
        const loans=await Loan.find();
        return loans;
    }
    ,
    async addLoan(loan){
        const newloan=await Loan.create(loan);
        return newloan;
    }
    ,
    async deleteLoan(id){
        const deletedloan=await Loan.findByIdAndDelete(id);
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