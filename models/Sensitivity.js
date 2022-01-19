const mongoose = require("mongoose");
const { Schema } = mongoose;

const SensitivitySchema = new Schema(
  {
    name: { type: String, required: [true, 'Name is required'] },
});

module.exports = mongoose.model('Sensitivity', SensitivitySchema);
