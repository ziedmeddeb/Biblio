const User = require('../models/User');
const Favorite = require('../models/Favorite');
const userService = {
   
async getUsers(){
  const users= await User.find();
    return users.map((user)=>user.toObject());

},
async getUserById (id) {
    const user = await User.findById(id);
    return user.toObject();
},

async addUser(user){
    const createdUser = await User.create(user);
    return createdUser.toObject();
},
//update
async updateUser(id, user){
    const updatedUser = await User.findByIdAndUpdate(id, user, {new: true});
    return updatedUser.toObject();
},
//delete
async deleteUser(id){
    await User.findByIdAndDelete(id);
},
//login

async loginUser(email, password) {
    
      const user = await User.findOne({ email: email, password: password });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
  
  },

  async userFavoriteBooks(id) {
    const favorites=await Favorite.find({user:id}).populate('books.book');
    return favorites;}


};

module.exports = userService;