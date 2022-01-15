const mongoose = require("mongoose");
const { Schema } = mongoose;

const directorateSchema = new Schema(
    {
        name: { type: String, required: [true, 'Directorate is required'] },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Country", directorateSchema);