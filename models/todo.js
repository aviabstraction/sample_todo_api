//collections refers to table
const mongoose = require('mongoose');

//BSON format
//collections refer to table
//document refer to db
//Schema => defining how should my collections look like

const TodoSchema = new mongoose.Schema({
  todo_name: {
    type: String,
  },
  todo_title: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
