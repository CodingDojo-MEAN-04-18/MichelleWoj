const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: {
      type: String,
      required: [true, 'A title is required'],
      trim: true,
      minlength: [3, 'A title must have at least 3 characters']
  },
  reviews:{type:[{
    author: {
      type: String,
      required: [true, 'Is a ghost writing this reviews? Please enter your name'],
      trim: true,
      minlength: [3, 'The minimum length is 3 characters. Add some more letters!'],
    },
    stars: {
      type: Number,
      required: [true, 'A rating is required'],
      trim: true,
      min: [1, 'The minimum rating is 1 star'],
      max: [5, 'The maximum rating is 5 stars']
    },
    review: {
      type: String,
      required: [true, 'Please enter a review!'],
      trim: true,
      minlength: [3, 'The minimum length is 3 characters. Add some more letters!']
    }
  }]},
  }
);

module.exports = mongoose.model("Movie", movieSchema);
