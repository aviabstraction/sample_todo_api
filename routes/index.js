//common js syntax
const express = require('express');
// const myCreateTodo = require('../controller/todo').myCreateTodo;
// const myGetAllTodos = require('../controller/todo').myGetAllTodos;

const {
  myGetTodo,
  myCreateTodo,
  myGetAllTodos,
  myDeleteTodo,
  myUpdatedTodo,
} = require('../controller/todo');

// import express from "express"

const router = express.Router();

//localhost:7000/api/;

router.post('/todo', myCreateTodo);
router.put('/todo/:id', myUpdatedTodo);
router.delete('/todo/:id', myDeleteTodo);
router.get('/todo/:id', myGetTodo);
router.get('/todo', myGetAllTodos);

//export router to outside world
module.exports = router;

// module.exports = ()=>{
//   return index.js
// }
