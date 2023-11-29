const express=require('express');
const loanService=require('../services/loanService');
const loanController=express.Router();
const protectUser = require("../middleware/userAuth.js");
loanController.get('',protectUser,async(req,res)=>{
    const loans=await loanService.getAllLoans();
    res.json(loans);
}
);
loanController.post('',protectUser,async(req,res)=>{
    try{const loan=await loanService.addLoan(req.body);
        res.json(loan);}
        catch(err){
            res.status(400).json({message:err.message});
        }
    
}
);
loanController.delete('/:id',protectUser,async(req,res)=>{
    const loan=await loanService.deleteLoan(req.params.id);
    res.json(loan);
}
);
loanController.put('/:id',protectUser,async(req,res)=>{
    
    const loan=await loanService.updateLoan(req.params.id,req.body);
    res.json(loan);
}
);

loanController.get('/:id/user',protectUser,async(req,res)=>{
    const loans=await loanService.getLoansByUser(req.params.id);
    res.json(loans);
}
);

module.exports=loanController;