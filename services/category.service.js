// import database model
const { Category } = require("../models/index");

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

const createNewCategory = async (data) => {
  const newCategory = await Category.create({
    name: data.name,
    discription: data.discription,
  });
  return newCategory;
};

const getCatgoriesById = async (idData) => {
  const response = await Category.findAll({
    where: {
      id: idData,
    },
  });
  return response;
};

const getCatgoriesByName = async (nameData) => {
  const response = await Category.findAll({
    where: {
      name: nameData,
    },
  });
  return response;
};

const updateCategoryByName = async (id, data) => {
  // Change everyone without a last name to "Doe"
  const response = await Category.update(
    {
       name: data.name,
       description: data.discription

     },
    {
      where: {
        id: id
      },
    }
  );
  return response;
};


const deleteCategoryById = async(id)=>{
  const response= await Category.destroy({
    where: {
      id: id
    },
  });
  return response;
}

const deleteCategoryByName = async(name)=>{
  const response= await Category.destroy({
    where: {
      name: name
    },
  });
  return response;
}

module.exports = {
  getAllCategories,
  createNewCategory,
  getCatgoriesById,
  getCatgoriesByName,
  updateCategoryByName,
  deleteCategoryById,
  deleteCategoryByName
};
