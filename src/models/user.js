const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  movieRatedByUser: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
});

let User =  mongoose.model("User", userSchema);
module.exports = User
