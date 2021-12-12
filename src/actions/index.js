/* require("dotenv").config(); */
/* import dotenv from "dotenv";
dotenv.config(); */
const REACT_APP_API_KEY = '3b04fbd1';
// I know perfectly well that sensitive data like an apikey should be called from an environment file added in gitignore to prevent that data from being uploaded. but I left it this way in order to facilitate the external use of the project

export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo, numPage) {
  return function (dispatch) {
    return fetch(
      `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${titulo}&type=movie&page=${numPage}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
      });
  };
}

export function removeMovieFavorite(id) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
}
