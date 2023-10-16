const express = require("express");
const app = express();

const { PORT } = require("./config/serverConfig");

// Require the routers
const categoryRoutes = require("./routes/category.routes");

categoryRoutes(app);
// Since categoryRoutes is a function so we an pass app to categoryRoutes

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the homepage of Ecommerce App FrontEnd side</h1>");
});

app.listen(PORT, async () => {
  console.log(`Express server is listening to port ${PORT}`);
});
