// import database model
const { Category } = require("../models/index");

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = { getAllCategories };
