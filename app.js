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

//Either create your promise or you do something with promise

//Mongoose is ODM (Object Data Model)
//Mongoose.connect() will give u an promise

// Promise: It is an placeholder of what should happen when data comes back or you connected
// externally with db

//event callback
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
