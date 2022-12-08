const express = require("express");
const router = express.Router();
const TodoController = require("./todo.controller");

router.post("/add", TodoController.addTodo);
router.get("/", TodoController.findTodos);
router.get("/:id", TodoController.findTodoById);
// router.get("/user/:id", TodoController.findUserById);
router.put("/:id", TodoController.updateTodo);
router.delete("/:id", TodoController.deleteById);

module.exports = router;
