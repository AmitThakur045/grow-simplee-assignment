const Movie = require("../models/movie.model");
const User = require("../models/user.model");

const getAllMovieDetails = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json({
      data: movies,
    });
  } catch (err) {
    console.log(err);
    return res.status(402).json({
      message: "could not fetch the movies list",
    });
  }
};

const getMovieRating = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.json({
        data: "NA",
        message: "could not find the movie's rating",
      });
    }
    return res.json({ data: movie.vote_average });
  } catch (err) {
    console.log(err);
    return res.status(402).json({
      message: "could not fetch the movie rating",
    });
  }
};

const addRating = async (req, res) => {
  try {
    const movieId = req.params.id;
    const { rating } = req.body;
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.json({
        message: "could not find the movie",
      });
    }

    // check if user already rated the movie or not
    const user = await User.findById(req.user._id)
    const isRated = user.movieRatedByUser.includes(movieId);

    if(isRated) {
        return res.json({ message: "already rated by user."})
    }

    const newRating =
      (movie.vote_average * movie.vote_count + rating) / (movie.vote_count + 1);
    movie.vote_count += 1;
    movie.vote_average = newRating.toFixed(2);

    user.movieRatedByUser.push(movie._id)
    await user.save()

    await movie.save();

    return res.json({ data: movie });
  } catch (err) {
    console.log(err);
    return res.status(402).json({
      message: "could not fetch the movie rating",
    });
  }
};

module.exports = {
  getAllMovieDetails,
  getMovieRating,
  addRating,
};
