const RegisterModel = require("../models/Register");

exports.list = async (req, res) => {
  try {
    const Entries = await RegisterModel.find({});
    res.render("register", {Entries: Entries});
  } catch (e) {
    res.status(404).send({ message: "could not list register entries" });
  }
};