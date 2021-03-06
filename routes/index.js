//common js syntax
const express = require('express');
// const myCreateTodo = require('../controller/todo').myCreateTodo;
// const myGetAllTodos = require('../controller/todo').myGetAllTodos;

//Todo imports
const {
  myGetTodo,
  myCreateTodo,
  myGetAllTodos,
  myDeleteTodo,
  myUpdatedTodo,
} = require('../controller/todo');

//login/register imports

const { register, login } = require('../controller/user');
// const login = require('../controller/user').login;

// const verifyToken = require('../controller/verifytoken');
const verifyToken = require('../controller/verifytoken');

// import express from "express"

const router = express.Router();

//localhost:7000/api/;

router.post(
  '/todo',
  //  verifyToken,
  myCreateTodo
);
router.put(
  '/todo/:id',
  //  verifyToken,
  myUpdatedTodo
);
router.delete(
  '/todo/:id',
  // verifyToken,
  myDeleteTodo
);
router.get(
  '/todo/:id',
  //  verifyToken,
  myGetTodo
);
//get all todos
router.get(
  '/todo',
  //  verifyToken,
  myGetAllTodos
);
//Verifytoken is a middleware
//login
router.post('/login', login);
router.post('/register', register);

//export router to outside world
module.exports = router;

// module.exports = ()=>{
//   return index.js
// }
