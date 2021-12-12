
const initialState = {
  moviesFavourites: getLocalStorage(),
  moviesLoaded: [],
  movieDetail: {},
};

function getLocalStorage() {
  const data = window.localStorage.getItem("movies");
  return data ? JSON.parse(data) : [];
}

function setLocalStorage(movie) {
  window.localStorage.setItem("movies", JSON.stringify(movie));
}

function rootReducer(state = initialState, action) {
    if (action.type === 'ADD_MOVIE_FAVORITE') {
      setLocalStorage(state.moviesFavourites.concat(action.payload));
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    } else if (action.type === 'GET_MOVIES') {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    } else if (action.type === 'GET_MOVIE_DETAIL') {
        return {
            ...state,
            movieDetail: action.payload
        }
    } else if (action.type === 'REMOVE_MOVIE_FAVORITE'){
      setLocalStorage(state.moviesFavourites.filter(movies => movies.imdbID !== action.payload))
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter(movies => movies.imdbID !== action.payload)
        }
    } else {
    return state;
  }
}

export default rootReducer;