// import Todo from '../models/todo';
const Todo = require('../models/todo');

//Create -Todo

const createTodo = (req, res) => {
  // const name = 'avinash';
  // const {todoName,todoTitle,completed} = req.body
  //usual way
  // const person = {
  //   name: name,
  //   todoName:todoName,
  //   todoTitle:todoTitle,
  //   completed:completed,
  //   todoName:todoName,
  //   todoTitle:todoTitle,
  //   completed:completed,
  //   todoName:todoName,
  //   todoTitle:todoTitle,
  //   completed:completed

  // };
  //shorthand syntax
  const person = {
    name,
  };

  //destructuring
  // const { name } = person;

  console.log(person.name);

  // const person = {
  //   name: 'Akilan',
  //   age: 2322,
  //   gender: 'Male',
  //   likes: {
  //     movies: 'xyz',
  //     test: {
  //       sample: {
  //         xyz: 'dfdsfa',
  //       },
  //     },
  //   },
  // };

  // const {
  //   name,
  //   age,
  //   gender,
  //   likes: {
  //     movies,
  //     test: {
  //       sample: { xyz },
  //     },
  //   },
  // } = person;

  // console.log(xyz);
  // console.log(person.likes.test.sample.xyz);

  //Difference between json and object
  //Json
  // const person = {
  //   "name":"akilan",
  //   "age": 2322,
  //   "gender": 'Male',

  // }
  //Object
  // const person = {
  //   name:"akilan",
  //   age: 2322,
  //   gender: 'Male',

  // }

  // console.log(name)

  // console.log(person.name);
  console.log(person.likes.test.sample.xyz);

  const { todoName, todoTitle, completed } = req.body;

  // const todoName = req.body.todoName
  // const todoTitle = req.body.todoTitle,
  // const completed = req.body.completed

  // Todo.create({
  //   todo_name: todoName,
  //   todo_title: todoTitle,
  //   completed: completed,
  // })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

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
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

//arrow functins

//function expression
// const sampleArrow = () => {};
// const sum = (num1, num2) => {
//   return num1 + num2;
// };
// const sum = (num1, num2) => num1 + num2;

//function
// function samplefunctin() {}

// function sum(num1,num2){
//   return num1+num2
// }

const getAllTodos = async (req, res) => {
  //ES7
  // const allTodos = await Todo.find();

  // res.json(allTodos);

  Todo.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getTodo = (req, res) => {
  const id = req.params.id;
  console.log(id, 'myid');

  Todo.findById(id)
    .then((data) => {
      console.log(data);
      //json
      // const {"todoName":"fdfsafd"}
      //object
      // const {todoName:"fdfsafd"}

      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

function deleteTodo(req, res) {
  const id = req.params.id;

  Todo.findByIdAndDelete(id)
    .then((data) => {
      res.status(200).json({ sucess: true });
    })
    .catch((err) => {
      console.log(err);
    });
}

const updateTodo = async (req, res) => {
  const id = req.params.id;

  const updatedTodo = await Todo.findByIdAndUpdate(id, req.body);

  res.status(200).json({ sucess: true, data: updatedTodo });
};

// function createTodo(req, res) {
//   const { todoName, todoTitle, completed } = req.body;
// }

//Since we are going to export multiple function, we use object
module.exports = {
  myCreateTodo: createTodo,
  myGetAllTodos: getAllTodos,
  myGetTodo: getTodo,
  myDeleteTodo: deleteTodo,
  myUpdatedTodo: updateTodo,
};
