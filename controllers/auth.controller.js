const AuthService = require("../services/auth.service");

const singUp = async (req, res) => {
  const response = await AuthService.signUp(req.body);
  return res.json({
    message: "Successfully registered",
    success: "true",
    code: 200,
    data: response,
  });
};

module.exports = {
  singUp,
};
