const mongoose= require('mongoose');
const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true,
        
    lowercase: true, 
    validate: {
      validator: function (value) {
        
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email format',
    },
    },
    password: {
        type:String,
        required: true
    },
    role: {
        type:String,
        required: true
    },
    birthDate: {
        type:Date,
        required: true    },
    adresse: {
        type:String,
        required: true
    },
    phoneNumber: {
        type:String,
        required: true
    },
   sex:{
            type:String,
            required:true,
        },
    
        university:{
            type:String,
            required:true,
        },
        cin:{
            type:String,
            required : true
        }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
