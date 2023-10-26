const ProductService = require("../services/products.service");

const getProducts = async (req,res)=>{
    const response = await ProductService.getAllProducts();
    return res.json({
        message: "successfully fetched the json data",
        success: "true",
        code: 200,
        data: response
    })
};

const getAllProductsWithCategories = async (req,res)=>{
    const response = await ProductService.getAllProductsWithCategories();
    return res.json({
        message: "successfully fetched the json data",
        success: "true",
        code: 200,
        data: response
    })
};

module.exports = {
    getProducts,
    getAllProductsWithCategories
}