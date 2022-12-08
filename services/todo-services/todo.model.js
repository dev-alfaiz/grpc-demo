const Sequelize = require("sequelize");
const db = require("./db");

const Todos = db.define("todos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Todos;
