const mongoose= require('mongoose');
const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true,
        minlength: 3,  
    },
    lastname: {
        type:String,
        required: true,
        minlength: 3,  
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
        required: true,
        minlength: 6,  
    },
    role: {
        type:String,
    },
    birthDate: {
        type:Date,
        required: true    },
    adresse: {
        type:String,
        required: true,
        minlength: 3,  
    },
    phoneNumber: {
        type:String,
        required: true,
        minlength: 8,  
        maxlength: 8 
    },
   sex:{
            type:String,
            required:true,
            enum:['male','female']
        },
    
        university:{
            type:String,
            required:true,
            minlength: 3,  
        },
        cin:{
            type:String,
            required : true,
            minlength: 8,  
            maxlength: 8 
            

        }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
