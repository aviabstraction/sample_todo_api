//collections refers to table
const mongoose = require('mongoose');

//BSON format
//collections refer to table
//document refer to db
//Schema => defining how should my collections look like

const UserSchema = new mongoose.Schema({
  user_name: {
    type: String,
  },
  password: {
    type: String,
  },
});

// {
//     user_name:"avinash",
//     password:"xyz"
// }

module.exports = mongoose.model('User', UserSchema);
