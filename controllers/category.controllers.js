/*   controller function is basically the same callback function that we write on the 

app.get('/',(req, res)=> {
    res.send("<h1>Welcome to the homepage of Ecommerce App FrontEnd side</h1>")
})
*/

// import service function from service folder
// const {
//   getAllCategories,
//   createNewCategory,
//   getCatgoriesById
// } = require("../services/category.service");

// instead of requring all functions one by one we can directly just import everything inside an object
const { response } = require("express");
const CategoryService = require("../services/category.service");

const getCategories = async (req, res) => {
  // controller is calling service without the knowledge of business logic
  const allCategories = await CategoryService.getAllCategories();

  return res.json({
    message: "Successfully fetched the JSON data",
    success: "true",
    code: 200,
    data: allCategories,
  });
};

// to create a category : sending data through req.body
const createCategory = async (req, res) => {
  // send data from user in request body to service and access it as req.body
  const response = await CategoryService.createNewCategory(req.body);
  return res.json({
    message: "Successfully created category",
    success: "true",
    code: 201,
    data: response,
  });
};

// to get all the categories by category id: using URL params
const getCatgoriesById = async (req, res) => {
  // to access url params use req.params
  const response = await CategoryService.getCatgoriesById(req.params.id);
  return res.json({
    message: "Successfully fetched all categories",
    success: "true",
    code: 200,
    data: response,
  });
};

// to get all the categories by category name : using query param
const getCatgoriesByName = async (req, res) => {
  // to access query param
  const response = await CategoryService.getCatgoriesByName(req.query.name);
  console.log(response);
  return res.json({
    message: "Successfully fetched all categories by name",
    success: "true",
    code: 200,
    data: response,
  });
};

// update category by given id . send query by query param and data through req.body
const updateCategory = async (req, res) => {
  const response = await CategoryService.updateCategoryByName(
    req.params.id,
    req.body
  );
  return res.json({
    message: "Successfully updated the category",
    success: "true",
    code: 201,
    data: response,
  });
};

const deleteCategoryById = async(req, res)=>{
  const response = await CategoryService.deleteCategoryById(req.params.id);
  return res.json({
    message: "Category deleted successfully",
    success: "true",
    code: 200,
    data: response
})
};

const deleteCategoryByName = async(req, res)=>{
  const response = await CategoryService.deleteCategoryByName(req.params.name);
  return res.json({
    message: "Category deleted successfully",
    success: "true",
    code: 201,
    data: response
})
};

module.exports = {
  getCategories,
  createCategory,
  getCatgoriesById,
  getCatgoriesByName,
  updateCategory,
  deleteCategoryById,
  deleteCategoryByName
};
