const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    text: {
      type: String,
      required: true,
      trim: true
    },
    // timestamps: true
  }
);

module.exports = mongoose.model("Note", noteSchema);
