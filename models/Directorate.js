const mongoose = require("mongoose");
const { Schema } = mongoose;

const DirectorateSchema = new Schema(
  {
    name: { type: String, required: [true, 'Name is required'] },
});

module.exports = mongoose.model('Directorate', DirectorateSchema);
