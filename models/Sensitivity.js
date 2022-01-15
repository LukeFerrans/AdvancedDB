const mongoose = require("mongoose");
const { Schema } = mongoose;

const sensitivitySchema = new Schema(
    {
        name: { type: String, required: [true, 'Sensitivity is required'] },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Sensitivity", sensitivitySchema);