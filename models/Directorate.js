const mongoose = require("mongoose");
const { Schema } = mongoose;

const DirectorateSchema = new Schema(
  {
    Directorate: String,
});

module.exports = mongoose.model('Directorate', DirectorateSchema);
