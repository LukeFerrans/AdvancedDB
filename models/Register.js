const mongoose = require("mongoose");
const { Schema } = mongoose;

const registerSchema = new Schema(
  {
    description: String,
    directorate: String,
    name: String,
    purpose: String,
    sensitivity: String,

    directorate_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Directorate",
    },
    sensitivity_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sensitivity",
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Register", registerSchema);
