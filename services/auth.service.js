const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

const signup = async (data) => {
  const response = await User.create({
    email: data.email,
    password: data.password,
    userName: data.userName,
  });
  return response;
};

const getUserByEmail = async (data) => {
  const response = await User.findOne({
    where: {
      email: data,
    },
  });
  return response;
};

const verifyPassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
}

module.exports = {
  signup,
  getUserByEmail,
  verifyPassword,
};
