const mongoose = require("mongoose");
const { Schema } = mongoose;

const RegisterSchema = new Schema(
  {
    Description: String,
    Directorate: String,
    Name: { type: String },
    Purpose: String,
    Sensitivity: String,


    directorate_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Directorate",
    },
    sensitivity_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sensitivity",
    },

});

module.exports = mongoose.model('Register', RegisterSchema);
