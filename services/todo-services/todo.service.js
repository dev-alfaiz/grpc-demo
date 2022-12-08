const Todos = require("./todo.model");

function findAll() {
  return Todos.findAll();
}

function findById(id) {
  return Todos.findByPk(id);
}

function deleteById(id) {
  return Todos.destroy({ where: { id: id } });
}

function create(todo) {
  var newTodo = new Todos(todo);
  return newTodo.save();
}

function updateTodo(todo, id) {
  const todoToUpdate = {
    title: todo.title,
  };
  return Todos.update(todoToUpdate, { where: { id: id } });
}

const TodoService = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateTodo: updateTodo,
};
module.exports = TodoService;
