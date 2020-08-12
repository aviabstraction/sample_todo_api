//common js syntax
const express = require('express');
// import express from "express"

const router = express.Router();

//localhost:7000/api/;

// router.post('/todo', createTodo);
// router.put('/todo/:id', updateTodo);
// router.delete('/todo/:id', deleteTodo);
// router.get('/todo/:id', getTodo);
// router.get('/todo', getAllTodos);

const sum = (num1, num2) => {
  return num1 + num2;
};

//export router to outside world
module.exports = router;

// module.exports = ()=>{
//   return index.js
// }
