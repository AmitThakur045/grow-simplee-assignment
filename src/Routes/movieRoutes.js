const express = require("express");
const auth = require("../middleware/auth.middleware");
const { addRating, getMovieRating, getAllMovieDetails } = require("../controller/movie.controller");

const router = express.Router();

router.get("/getAllMovies", auth, getAllMovieDetails);
router.get("/:id", getMovieRating);
router.post("/:id", auth, addRating);

module.exports = router;
