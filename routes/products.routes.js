
const ProductController = require("../controllers/products.controllers");

const routes = (app)=>{
    // for all product
    app.get("/ecom/api/v1/products", ProductController.getProducts);

    // for all products with categories
    app.get("/ecom/api/v1/productsWithCategories",ProductController.getAllProductsWithCategories);
}

module.exports = routes;
