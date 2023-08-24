const addmovieRating = require("./addmovieRating");
const getMovieRating = require("./getMovieRating");
const getallmovies = require("./getallmovies");
const login = require("./login");
const signUp = require("./sign-up");

module.exports = {
    paths:{
        '/api/user/signup':{
            ...signUp,
        },
        '/api/user/login':{
            ...login,
        },
        '/api/movie/getAllMovies': {
            ...getallmovies
        },
        '/api/movie/{id}': {
            ...getMovieRating,
            ...addmovieRating
        }
    }
}