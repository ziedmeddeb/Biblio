const mongoose = require('mongoose');

const connect = async ()=>{
    try {
       await mongoose.connect('mongodb+srv://yosssd19:5PZ4ObK0HmYW4IEN@collections.4flsdy9.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connected to MongoDB!');
    } catch (err) {
        console.error('Connection error', err);
    }
};

module.exports = connect;