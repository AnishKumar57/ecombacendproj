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
};

module.exports = {
  getAllCategories,
  createNewCategory,
};
