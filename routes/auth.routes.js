const AuthController = require("../controllers/auth.controller");
const routes = (app)=>{
    
    // For signup
    app.post("/ecom/api/v1/signUp",AuthController.singUp)
}

module.exports= routes;