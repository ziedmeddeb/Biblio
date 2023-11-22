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
const livreController = require('./controllers/livreController');
app.use('/livres', livreController);

const userController = require('./controllers/userController');
app.use('/users', userController);