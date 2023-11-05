const AuthController = require("../controllers/auth.controller");
const routes = (app)=>{
    
    // For signup
    app.post("/ecom/api/v1/signup",AuthController.signup)

    // For signin
    app.post("/ecom/api/v1/signin",AuthController.signin )
}

module.exports= routes;