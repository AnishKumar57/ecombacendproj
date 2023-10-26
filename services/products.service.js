const {Product, Category} = require("../models/index");

const getAllProducts = async ()=> {
    
    const data = await Product.findAll();
    return data;
}

const getAllProductsWithCategories = async ()=> {
    // include:Category is providing data of every product under particular category
    const data = await Product.findAll({include:Category});
    return data;
}

module.exports={
    getAllProducts,
    getAllProductsWithCategories
}