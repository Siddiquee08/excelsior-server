const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
const courseCategories = require("./data/corseCategory.json");
app.get("/", (req, res) => {
  res.send("Server Up and Running");
});
app.get("/courseCategories", (req, res) => {
  res.send(courseCategories);
});
app.listen(port, () => {
  console.log("The server is running on port:", port);
});
