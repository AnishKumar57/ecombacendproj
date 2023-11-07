const authService = require("../services/auth.service");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuthenticated = async (req, res, next) => {
  // Token Varification
  const token = req.headers["x-access-token"];
  if (!token) {
    // if  token is missing
    return res.json({
      status: 401,
      message: "JWT token is missing",
      data: [],
      err: "Invalid or missing argument in request header",
      msg: token,
    });
  }

  // user is sending a token in the request
  const response = authService.verifyToken(token);
  if (!token) {
    return res.json({
      status: 401,
      message: "Invalid JWT token",
      data: [],
      err: "Invalid auth details",
    });
  }


  const user = await authService.getUserByEmail(response.email);
  if (!user) {
    return res.json({
      status: 401,
      message: "JWT token send for an invalid user",
      data: [],
      err: "Invalid credentials",
    });
  }

  req.user = user;

  next();
};

module.exports = { isAuthenticated };
