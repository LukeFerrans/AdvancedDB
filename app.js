require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const chalk = require("chalk");


const RegisterController = require("./controllers/Register");

const app = express();
app.set("view engine", "ejs");

const { PORT, MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log(
    "MongoDB connection error. Please make sure MongoDB is running.",
    chalk.red("✗")
  );
  process.exit();
});

app.use(express.static(path.join(__dirname, "public")));


require("dotenv").config();
console.log(process.env.PORT)

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/register", RegisterController.list);

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/account", (req, res) => {
  res.render("account");
});

app.listen(PORT, () => {
  console.log(
    `Example app listening at http://localhost:${PORT}`,
    chalk.green("✓")
  );
});