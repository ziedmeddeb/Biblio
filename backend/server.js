const express = require('express');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger_output.json");

const connectmongodb = require('./config/config.js');


const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve Swagger UI at /api-docs endpoint
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
  });

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

// Start server


// Connect to MongoDB
connectmongodb();
