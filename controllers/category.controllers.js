/*   controller function is basically the same callback function that we write on the 

app.get('/',(req, res)=> {
    res.send("<h1>Welcome to the homepage of Ecommerce App FrontEnd side</h1>")
})
*/

// import service function from service folder
const {
  getAllCategories,
  createNewCategory,
} = require("../services/category.service");

const getCategories = async (req, res) => {
  // controller is calling service without the knowledge of business logic
  const allCategories = await getAllCategories();

  return res.json({
    message: "Successfully fetched the JSON data",
    success: "true",
    code: 200,
    data: allCategories,
  });
};

const createCategory = async (req, res) => {
  // send data from user in request body to service
  const response = await createNewCategory(req.body);
  return res.json({
    message: "Successfully created category",
    success: "true",
    code: 201,
    data: response,
  });
};

module.exports = {
  getCategories,
  createCategory,
};
