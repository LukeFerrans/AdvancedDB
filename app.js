const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const registerController = require("./controllers/register");





const { PORT, MONGODB_URI } = process.env;


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log("MongoDB connection error. Please make sure MongoDB is running.");
  process.exit();
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

require("dotenv").config();
console.log(process.env.PORT)

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/register", registerController.list);
app.get("/register/delete/:id", registerController.delete);

// app.get("/register", (req, res) => {
//   res.render("register");
// });

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/account", (req, res) => {
  res.render("account");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});