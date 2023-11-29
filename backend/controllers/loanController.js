const express=require('express');
const loanService=require('../services/loanService');
const loanController=express.Router();
loanController.get('',async(req,res)=>{
    const loans=await loanService.getAllLoans();
    res.json(loans);
}
);
loanController.post('',async(req,res)=>{
    const loan=await loanService.addLoan(req.body);
    res.json(loan);
}
);
loanController.delete('/:id',async(req,res)=>{
    const loan=await loanService.deleteLoan(req.params.id);
    res.json(loan);
}
);
loanController.put('/:id',async(req,res)=>{
    
    const loan=await loanService.updateLoan(req.params.id,req.body);
    res.json(loan);
}
);

loanController.get('/:id/user',async(req,res)=>{
    const loans=await loanService.getLoansByUser(req.params.id);
    res.json(loans);
}
);

module.exports=loanController;