//collections refers to table
const mongoose = require('mongoose');
const SubTodoSchema = require('./subtodo');

//BSON format
//collections refer to table
//document refer to db
//Schema => defining how should my collections look like

//subdocument association

const TodoSchema = new mongoose.Schema({
  todo_name: {
    type: String,
    required: true,
  },
  todo_title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  subTodo: {
    type: [SubTodoSchema],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
