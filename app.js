require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const User = require("./models/User.js");
const searchApiController = require("./controllers/api/search");

const RegisterController = require("./controllers/Register");
const UserController = require("./controllers/User");

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressSession({ secret: 'foo barr', cookie: { expires: new Date(253402300000000) } }))
app.use('/scripts', express.static(__dirname + '../public/scripts'))

app.use("*", async (req, res, next) => {
  global.user = false;
  if (req.session.userID && !global.user) {
    const user = await User.findById(req.session.userID);
    global.user = user;
  }
  next();
})

const authMiddleware = async (req, res, next) => {
  const user = await User.findById(req.session.userID);
  if (!user) {
    return res.redirect('/');
  }
  next()
}


app.get("/create", authMiddleware, (req, res) => {
  res.render("create", { errors: {} });
});

app.post("/create", RegisterController.create);

app.get("/register", authMiddleware, RegisterController.list);
app.get("/register/delete/:id", RegisterController.delete);
app.get("/register/edit/:id", RegisterController.edit);
app.post("/register/edit/:id", RegisterController.update);

require("dotenv").config();
console.log(process.env.PORT)

app.get("/search",(req,res) => {
  res.render('search', searchApiController);
});
app.get("/api/search", searchApiController.list);


app.get("/join", (req, res) => {
  res.render('create-user', { errors: {} })
});

app.post("/account", UserController.create);


app.get("/index", (req, res) => {
  res.render('index', { errors: {} })
});

app.post("/join", UserController.create);
app.post("/login", UserController.login);

app.get("/logout", async (req, res) => {
  req.session.destroy();
  global.user = false;
  res.redirect('index');
})

app.listen(PORT, () => {
  console.log(
    `Example app listening at http://localhost:${PORT}`,
    chalk.green("✓")
  );
});