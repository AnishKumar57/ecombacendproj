
const ProductController = require("../controllers/products.controllers");

const routes = (app)=>{
    // for all product
    app.get("/ecom/api/v1/products", ProductController.getProducts);

    // for all products with categories
    app.get("/ecom/api/v1/productsWithCategories",ProductController.getAllProductsWithCategories);

    // to create a product
    app.post("/ecom/api/v1/product",ProductController.createProduct)

    // to update a product
    app.put("/ecom/api/v1/product/:id",ProductController.updateProduct);

    // to delete a product
    app.delete("/ecom/api/v1/product/:name/:categoryId",ProductController.deleteProduct);
}

module.exports = routes;
