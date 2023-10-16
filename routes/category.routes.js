// Rest bases API Routes for ecommerce project

//es6 Version of require
// import {getCategories as CategoryController} from "../controllers/category.controllers";

// require controller
const CategoryController = require("../controllers/category.controllers");

const routes = (app) => {
  // to get all the category
  app.get("/ecomm/api/v1/categories", CategoryController.getCategories);
};

module.exports = routes;
