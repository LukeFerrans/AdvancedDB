const Register = require("../models/Register");
const Directorate = require("../models/Directorate");
const Sensitivity = require("../models/Sensitivity");

exports.list = async (req, res) => {
  try {
    const Entries = await Register.find({});
    res.render("register", {Entries: Entries});
  } catch (e) {
    res.status(404).send({ message: "could not list register entries" });
  }
};

exports.edit = async (req, res) => {
  const id = req.params.id;
  try {
    const Entries = await Register.findById(id);
    res.render('edit', { Entries: Entries, id: id });
  } catch (e) {
    res.status(404).send({
      message: `Cannot find register entry: ${id}.`,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const register = new Register({ 
      Directorate: req.body.Directorate, 
      Name: req.body.Name, 
      Description: req.body.Description,
      Purpose: req.body.Purpose,  
      Sensitivity: req.body.Sensitivity 
    });
    await register.save();
    res.redirect('/register/?message=Register entry has been created')
  } catch (e) {
    if (e.errors) {
      console.log(e.errors);
      res.render("create", { errors: e.errors })
      return;
    }
    return res.status(400).send({
      message: JSON.parse(e),
    });
  }
}

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const Register = await Register.updateOne({ _id: id }, req.body);
    res.redirect('/register/?message=taster has been updated');
  } catch (e) {
    res.status(404).send({
      message: `could find register ${id}.`,
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    await Register.findByIdAndRemove(id);
    res.redirect("/register");
  } catch (e) {
    res.status(404).send({
      message: `could not delete record ${id}.`,
    });
  }
};