const UserService = require("./users.service");

function addUser(req, res) {
  const user = req.body;
  UserService.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function findUserById(req, res) {
  UserService.findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function findUserByEmail(req, res) {
  UserService.findByEmail(req.body.email)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteById(req, res) {
  UserService.deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "User deleted successfully",
        result: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateUser(req, res) {
  UserService.updateUser(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "User updated successfully",
        result: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function findUsers(req, res) {
  UserService.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

const UserController = {
  addUser: addUser,
  findUsers: findUsers,
  findUserById: findUserById,
  findUserByEmail: findUserByEmail,
  updateUser: updateUser,
  deleteById: deleteById,
};

module.exports = UserController;
