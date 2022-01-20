const mongoose = require("mongoose");
const { Schema } = mongoose;

const SensitivitySchema = new Schema(
  {
    Sensitivity: String,
});

module.exports = mongoose.model('Sensitivity', SensitivitySchema);
