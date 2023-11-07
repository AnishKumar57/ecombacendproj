const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
require("dotenv").config();

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

// Becrypt hash comparision with password
const verifyPassword = (userpassword, hashedPassword) => {
  return bcrypt.compare(userpassword, hashedPassword);
};

// JWT token varification
const verifyToken = (token) => {
  const response = jwt.verify(token, process.env.JWT_SECRET_KEY);
  return response;
};

module.exports = {
  signup,
  getUserByEmail,
  verifyPassword,
  verifyToken,
};
