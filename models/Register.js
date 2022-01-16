const mongoose = require("mongoose");
const { Schema } = mongoose;

const RegisterSchema = new Schema(
  {
    Description: String,
    Directorate: String,
    Name: { type: String },
    Purpose: String,
    Sensitivity: String,
});

module.exports = mongoose.model('Register', RegisterSchema);
