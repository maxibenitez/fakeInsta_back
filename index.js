// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// defining the Express app
const app = express();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// Rutas
app.use('/api/posts', require('./src/routes/posts'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(ads);
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});