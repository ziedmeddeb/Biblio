const express = require('express');
const connectmongodb = require('./config/config.js');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
connectmongodb();