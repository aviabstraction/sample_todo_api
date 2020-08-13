//common js syntax
const express = require('express');
const myCreateTodo = require('../controller/todo').myCreateTodo;
// import express from "express"

const router = express.Router();

//localhost:7000/api/;

router.post('/todo', myCreateTodo);
// router.put('/todo/:id', updateTodo);
// router.delete('/todo/:id', deleteTodo);
// router.get('/todo/:id', getTodo);
// router.get('/todo', getAllTodos);

//export router to outside world
module.exports = router;

// module.exports = ()=>{
//   return index.js
// }
