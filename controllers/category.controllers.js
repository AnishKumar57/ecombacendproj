/*   controller function is basically the same callback function that we write on the 

app.get('/',(req, res)=> {
    res.send("<h1>Welcome to the homepage of Ecommerce App FrontEnd side</h1>")
})
*/

const getCategories = (req, res) => {
  return res.json({
    message: "Successfully fetched the JSON data",
    success: "true",
    code: 200,
    data: {
      name: "electronics",
      data: "data for electornics",
    },
  });
};

module.exports = {
  getCategories,
};
