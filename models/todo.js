//collections refers to table
const mongoose = require('mongoose');

//Schema => defining how should my collections look like

const TodoSchema = new mongoose.Schema({
  todoName: {
    type: String,
    required: true,
    trim: true,
  },
  todoTitle: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
