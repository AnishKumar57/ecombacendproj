const ProductService = require("../services/products.service");

const getProducts = async (req, res) => {
  const response = await ProductService.getAllProducts();
  return res.json({
    message: "successfully fetched the json data",
    success: "true",
    code: 200,
    data: response,
  });
};

const getAllProductsWithCategories = async (req, res) => {
  const response = await ProductService.getAllProductsWithCategories();
  return res.json({
    message: "successfully fetched the json data",
    success: "true",
    code: 200,
    data: response,
  });
};

const createProduct = async (req, res) => {
  const response = await ProductService.createProduct(req.body);
  return res.json({
    message: "Product added successfully",
    success: "true",
    code: 201,
    data: response,
  });
};

const updateProduct = async (req, res) => {
  const response = await ProductService.updateProduct(req.params.id, req.body);
  return res.json({
    message: "Product updated successfully",
    success: "true",
    code: 201,
    data: response,
  });
};

const deleteProduct = async (req, res)=>{
    const response = await ProductService.deleteProduct(req.params.name, req.params.categoryId);
    return res.json({
        message: "Product deleted successfully",
        success: "true",
        code: 201,
        data: response
    })
}

module.exports = {
  getProducts,
  getAllProductsWithCategories,
  createProduct,
  updateProduct,
  deleteProduct
};
