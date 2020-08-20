const mongoose = require('mongoose');

const SubTodoSchema = new mongoose.Schema({
  sub_name: {
    type: String,
    required: true,
  },
  sub_title: {
    type: String,
    required: true,
  },
});

module.exports = SubTodoSchema;
