const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const api_routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

//app.use to used to connect middlewares with my express/nodejs applications
app.use(bodyParser.json());

//in order to not cors policy origin error in frontend
app.use(cors());

//It is going to connect with routes folder

app.use('/api', api_routes);

//connect with db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('DB connection estabilished');
  })
  .catch(() => {
    console.log(`DB connection shows error`);
  });

const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`Server listening on port ${Port}`);
});
