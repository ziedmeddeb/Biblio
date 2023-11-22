const express = require('express');
const cors = require("cors");
const connectmongodb = require('./config/config.js');
const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
connectmongodb();
const bookController = require('./controllers/bookController');
app.use('/books', bookController);

const userController = require('./controllers/userController');
app.use('/users', userController);

const loanController = require('./controllers/loanController');
app.use('/loans', loanController);

const favoriteController = require('./controllers/favoriteController');
app.use('/favorites', favoriteController);

const reviewController = require('./controllers/reviewController');
app.use('/reviews', reviewController);