const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const { startGRPCServer } = require("./grpc");

//Database Connection
const db = require("./db");
db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors("*"));
app.use("/users", require("./users.routes"));

const PORT = process.env.PORT || 6000;
db.sync()
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log("Error: " + err));

startGRPCServer();
