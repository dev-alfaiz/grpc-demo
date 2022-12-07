const Users = require("./users.model");

function findAll() {
  return Users.findAll();
}

function findById(id) {
  return Users.findByPk(id);
}

function findByEmail(email) {
  return Users.findOne({ where: { email: email } });
}

function deleteById(id) {
  return Users.destroy({ where: { id: id } });
}

function create(newUserToCreate) {
  var newUser = new Users(newUserToCreate);
  return newUser.save();
}

function updateUser(user, id) {
  const userToUpdate = {
    username: user.username,
    email: user.email,
    password: user.password,
  };
  return Users.update(userToUpdate, { where: { id: id } });
}

const UserService = {
  findAll: findAll,
  findByEmail: findByEmail,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateUser: updateUser,
};

module.exports = UserService;
