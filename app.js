// Require the routers
const categoryRoutes = require("./routes/category.routes");

const express = require ('express');
const app = express();
const port = 8080;

categoryRoutes(app);
// Since categoryRoutes is a function so we an pass app to categoryRoutes

app.get('/',(req, res)=> {
    res.send("<h1>Welcome to the homepage of Ecommerce App FrontEnd side</h1>")
})

app.listen(port,async ()=>{
    console.log(`Express server is listening to port ${port}`);


})