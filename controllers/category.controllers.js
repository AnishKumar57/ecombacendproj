/*   controller function is basically the same callback function that we write on the 

app.get('/',(req, res)=> {
    res.send("<h1>Welcome to the homepage of Ecommerce App FrontEnd side</h1>")
})
*/

// import service function from service folder
const { getAllCategories } = require("../services/category.service");

const getCategories = async (req, res) => {
  const allCategories = await getAllCategories();

  return res.json({
    message: "Successfully fetched the JSON data",
    success: "true",
    code: 200,
    data: allCategories,
  });
};

module.exports = {
  getCategories,
};
