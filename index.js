const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
const courseCategories = require("./data/corseCategory.json");
const allCourses = require("./data/courseDetails.json");
app.get("/", (req, res) => {
  res.send("Server Up and Running");
});
app.get("/courseCategories", (req, res) => {
  res.send(courseCategories);
});
app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = allCourses.find((course) => course._id === id);
  res.send(selectedCourse);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = allCourses.filter((c) => c.category_id === id);
  res.send(course);
});
app.listen(port, () => {
  console.log("The server is running on port:", port);
});
