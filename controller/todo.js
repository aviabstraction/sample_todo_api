// import Todo from '../models/todo';
const Todo = require('../models/todo');

//Create -Todo

const createTodo = (req, res) => {
  const { todoName, todoTitle, completed } = req.body;

  //   const todoChangedName = req.body.todoName
  //   const todoTitle = req.body.todoTitle,
  //   const completed = req.body.completed

  //Instantiate newTodo

  const newTodo = new Todo({
    todo_name: todoName,
    todo_title: todoTitle,
    completed: completed,
  });

  //saving to db
  //Return a promise
  newTodo
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// function createTodo(req, res) {
//   const { todoName, todoTitle, completed } = req.body;
// }

//Since we are going to export multiple function, we use object
module.exports = { myCreateTodo: createTodo };
