const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  overview: {
    type: String,
    require: true,
  },
  language: String,
  popularity: Number,
  release_date: String,
  poster_path: String,
  vote_average: Number,
  vote_count: Number,
});

let Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
