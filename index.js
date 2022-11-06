// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { dbConnection } = require('./src/db/conn');
require('dotenv').config();

// defining the Express app
const app = express();

// db connection
dbConnection();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// post routes
app.use('/api/posts', require('./src/routes/posts'));
app.use('/api/posts/:id', require('./src/routes/posts'));

// user routes
app.use('/api/users', require('./src/routes/users'));
app.use('/api/users/:id', require('./src/routes/users'));

// image routes
app.use('/api/images', require('./src/routes/images'));
app.use('/api/images/:id', require('./src/routes/images'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(ads);
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});