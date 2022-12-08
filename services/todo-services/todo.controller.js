const TodoService = require("./todo.service");
const UsersClient = require("./clients/users.client");

function addTodo(req, res) {
  const todo = req.body;
  TodoService.create(todo)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function findTodoById(req, res) {
  const user = await UsersClient.getUserById({ id: req.params.id });
  console.log("Response From User Client:", user);
  TodoService.findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function findUserById(req, res) {
  UsersClient.getUserById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteById(req, res) {
  TodoService.deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Todo deleted successfully",
        result: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateTodo(req, res) {
  TodoService.updateTodo(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Todo updated successfully",
        result: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function findTodos(req, res) {
  TodoService.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

var TodoController = {
  addTodo: addTodo,
  findTodos: findTodos,
  findTodoById: findTodoById,
  findUserById: findUserById,
  updateTodo: updateTodo,
  deleteById: deleteById,
};

module.exports = TodoController;
