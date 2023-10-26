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

const createProduct = async (data)=>{
    const product = await Product.create({
        name: data.name,
        description: data.description,
        cost: data.cost,
        categoryId : data.categoryId
    })
    return product;
}

const updateProduct = async (productId, data)=>{
    const response = await Product.update({
        name: data.name,
        description: data.description,
        cost: data.cost,
        categoryId : data.categoryId
    },
    {
        where: {
            id: productId
        }
    })
    return response;
}

const deleteProduct = async (name, categoryId)=>{
    const response = await Product.destroy({
        where: {
            name: name,
            categoryId: categoryId
        }
    });
    return response
}

module.exports={
    getAllProducts,
    getAllProductsWithCategories,
    createProduct,
    updateProduct,
    deleteProduct
}