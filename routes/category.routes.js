// Rest bases API Routes for ecommerce project

//es6 Version of require
// import {getCategories as CategoryController} from "../controllers/category.controllers";

// require controller
const CategoryController = require("../controllers/category.controllers");
const CategoryMiddleware = require("../middlewares/category.validators");
const AuthenticatonMiddleware = require("../middlewares/authentication.validators");

const routes = (app) => {
  // to get all the category : just by using url
  app.get("/ecomm/api/v1/categories", CategoryController.getCategories);

  // to create a category : sending data through req.body
  app.post(
    "/ecomm/api/v1/categories",
    AuthenticatonMiddleware.isAuthenticated,
    CategoryMiddleware.validateCreate,
    CategoryController.createCategory
  );

  // to get all the categories by category id: using URL params
  app.get("/ecomm/api/v1/categories/:id", CategoryController.getCatgoriesById);

  // to get all the categories by category name : using query param
  app.get(
    "/ecomm/api/v1/categoriesByName",
    CategoryController.getCatgoriesByName
  );

  // update category by given id . send query by query param and data through req.body
  app.put(
    "/ecomm/api/v1/updateCategory/:id",
    CategoryController.updateCategory
  );

  // // to delete a category by Id
  // app.delete("/ecomm/api/v1/deleteCategoryById/:id",CategoryController.deleteCategoryById);

  // to delete a a category by name
  app.delete(
    "/ecomm/api/v1/deleteCategoryByName/:name",
    CategoryController.deleteCategoryByName
  );
};

module.exports = routes;

/* This is a route. It only tells the path
      /ecomm/api/v1/updateCategory/:id
*/

/* An api is a request. It tell what an api expect and what it response.
  app.put("/ecomm/api/v1/updateCategory/:id", CategoryController.updateCategory)
*/
