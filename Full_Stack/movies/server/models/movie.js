const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
  },
  reviews:{type:[{
    author:{type: String, required: true, trim: true, minlength: 3},
    stars:{type: Number, required: true, trim: true},
    review:{type: String, required: true, trim: true, minlength: 3}
  }]},
  }
);

module.exports = mongoose.model("Movie", movieSchema);
