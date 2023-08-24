const axios = require("axios");
const mongoose = require("mongoose");
const Movie = require("./models/movie.js");
const dotenv = require('dotenv')
dotenv.config({ path: "./src/config/config.env" });

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function fetchAndStoreMovies(page) {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/movie/popular`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        page: page,
      },
    });

    const movies = response.data.results;

    for (const movie of movies) {
      const movieDetails = {
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        language: movie.language,
        popularity: movie.popularity,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        poster_path: movie.poster_path,
      };

      await Movie.create(movieDetails);
      console.log(`Stored: ${movie.title}`);
    }

    console.log(`Movies from page ${page} stored successfully.`);
  } catch (err) {
    console.log("could not fetch the movies details: ", err);
  }
}

async function fetchMoviesFromMultiplePages() {
  for (let page = 11; page <= 20; page++) {
    await fetchAndStoreMovies(page);
  }

  mongoose.disconnect();
  console.log("All movies from all pages stored successfully.");
}

fetchMoviesFromMultiplePages();
