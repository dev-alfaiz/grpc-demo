const express = require("express");
const router = express.Router();
const UserController = require("./users.controller");

router.post("/add", UserController.addUser);
router.get("/", UserController.findUsers);
router.get("/:id", UserController.findUserById);
router.post("/", UserController.findUserByEmail);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteById);

module.exports = router;
