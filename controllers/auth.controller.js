const { response } = require("express");
const AuthService = require("../services/auth.service");
var jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const response = await AuthService.signup(req.body);
  return res.json({
    message: "Successfully registered",
    success: "true",
    code: 200,
    data: response,
  });
};

const signin = async (req, res) => {
  const userData = await AuthService.getUserByEmail(req.body.email);
  if (!userData) {
    // when user email id is not present
    return res.json({
      message: "Email id is not correct, please enter correct email id",
      success: "true",
      data: response,
      code: 400,
    });
  } else {
    // when user email id is present
    // given password: req.body.password
    // password from db: userData.password
    const passwordVarified = AuthService.verifyPassword(
      req.body.password,
      userData.password
    );

    console.log(passwordVarified);
    if (passwordVarified) {
      const token = jwt.sign(
        {
          email: userData.email,
          password: userData.password,
          username: userData.userName,
          
        },
        process.env.JWT_SECRET_KEY
      );

      // if password matched
      return res.json({
        message: "Signed in successfully",
        success: true,
        token: token,
        code: 200,
      });
    } else {
      // if password not matched
      return res.json({
        message: "Incorrect Password! Please try again",
        success: true,
        data: null,
        code: 400,
      });
    }
  }
  return userData;
};

module.exports = {
  signup,
  signin,
};
