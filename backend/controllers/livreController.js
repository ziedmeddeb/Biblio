const livreService=require('../services/livreService');
const express=require('express');
const livreController=express.Router();

livreController.get('/',async(req,res)=>{
    const livres=await livreService.getAllLivres();
    res.json(livres);
}
);
livreController.get('/:id',async(req,res)=>{
    const livre=await livreService.getLivreById(req.params.id);
    res.json(livre);
}
);
livreController.post('/',async(req,res)=>{
    const livre=await livreService.createLivre(req.body);
    res.json(livre);
}
);
livreController.put('/:id',async(req,res)=>{
    const livre=await livreService.updateLivre(req.params.id,req.body);
    res.json(livre);
}
);
livreController.delete('/:id',async(req,res)=>{
    const livre=await livreService.deleteLivre(req.params.id);
    res.json(livre);
}
);
module.exports=livreController;