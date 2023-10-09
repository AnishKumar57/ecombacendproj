require("dotenv").config();

const express = require("express");
const app = express();
const { Sequelize, DataTypes } = require("sequelize");

// Port no. from .env file
const port = process.env.PORT;

// Create an instance of sequelize class and use object of it.

const sequelizeObj = new Sequelize({
  database: "lodgiedge",
  username: "root",
  password: "root@123",
  host: "localhost",
  dialect: "mysql",
});

// Use the .authenticate() function to test if the connection is OK:
async function  checkConnection(){
  try {
    await sequelizeObj.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
checkConnection();

 // Define the model by using .define method with sequelize object. It will create a table in database.
const userObject = sequelizeObj.define('User',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name : {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,

  }
})

// Create table, insert and show  data in the table created.
async function addData(){
  try{

    // sync is necessary for creation of table. If it is true. It will drop table and create a new one
    // await sequelizeObj.sync();

    // insert into tables created
    // await userObject.create({name: "Eklavya", email: "akjnv541@gmail.com"})
    await userObject.create({name: "Ekta", email: "akjnv542@gmail.com"})
    
    // Show data
    let data = await userObject.findAll();
    console.log(data);

    
  }
  catch{
    console.log("something went wrong")
  }
}

addData();





app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
