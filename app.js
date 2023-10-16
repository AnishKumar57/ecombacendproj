const express = require("express");
const app = express();

// body parser added to send data in json format in request body
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

// Require the routers
const categoryRoutes = require("./routes/category.routes");

// app.use is using the provided middleware for every incoming request by the server.
// we need to add body-parser middleware that will help express to read all the query and body params
app.use(bodyParser.urlencoded({ extended: true }));

categoryRoutes(app);
// Since categoryRoutes is a function so we an pass app to categoryRoutes

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the homepage of Ecommerce App FrontEnd side</h1>");
});

app.listen(PORT, async () => {
  console.log(`Express server is listening to port ${PORT}`);
});
