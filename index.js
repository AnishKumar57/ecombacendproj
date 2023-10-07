require("dotenv").config();

const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");

// Port no. from .env file
const port = process.env.PORT;

// Create an instance of sequelize class and use object of it.

const sequelize = new Sequelize({
  database: "lodgiedge",
  username: "root",
  password: "root@123",
  host: "localhost",
  dialect: "mysql",
});

// Use the .authenticate() function to test if the connection is OK:
async function  checkConnection(){
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

checkConnection();




app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
