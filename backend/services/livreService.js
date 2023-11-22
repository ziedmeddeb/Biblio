
const Livre=require('../models/Livre');
const livreService={
    
    async getAllLivres(){
        const livres=await Livre.find();
        return livres;
    },
    async getLivreById(id){
        const livre=await Livre.findById(id);
        return livre;
    },
    async createLivre(livre){
        const newLivre=await Livre.create(livre);
        return newLivre;
    },
    async updateLivre(id,livre){
        const updatedLivre=await Livre.findByIdAndUpdate(id,livre,{new:true});
        return updatedLivre;
    },
    async deleteLivre(id){
        const deletedLivre=await Livre.findByIdAndDelete(id);
        return deletedLivre;
    }
};
module.exports=livreService;