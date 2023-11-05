const { User } = require("../models/index");




const signUp = async (data) => {
  const response = await User.create({
    email: data.email,
    password: data.password,
    userName: data.userName,
  });
  return response;
};

module.exports = {
  signUp,
};
