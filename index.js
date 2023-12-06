const express = require("express");
const methodOverride = require("method-override");
const app = express();
const PORT = 8080;

// Serve static files from the 'public' directory
app.use(express.static("public"));

global.DEBUG = true;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (request, response) => {
  response.render("about.ejs");
});

// routes

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

// // api routes
const apiusersRouter = require("./routes/api/users");
app.use("/api", apiusersRouter);

// 404 page
app.use((req, res) => {
  res.status(404).render("404");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Simple app running on port ${PORT}.`);
});
