const Register = require("../models/Register");

exports.list = async (req, res) => {
    try {
      const registers = await Register.find({});
      res.render("register", { registers: registers });
    } catch (e) {
      res.status(404).send({ message: "could not list register entries" });
    }
  };

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
      await Register.findByIdAndRemove(id);
      res.redirect("/register");
    } catch (e) {
      res.status(404).send({
        message: `could not delete  record ${id}.`,
      });
    }
  };

