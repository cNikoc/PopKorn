import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Buscador.css";
import Cono from "../../notFound.png";
import {
  addMovieFavorite,
  getMovies,
  removeMovieFavorite,
} from "../../actions/index";
import Blocked from "../../no-image.png";
import Prev from "../../left-arrow.png";
import Next from "../../right-arrow.png";

export function Buscador(props) {
  var numPage = props.match.params.page.split("&")[0];
  var title = props.match.params.page.split("=")[1];

  const history = useHistory();

  function handlePrev(event) {
    event.preventDefault();
    if (numPage > 1) {
      numPage--;
    }
    history.push(`/search/${numPage}&title=${title}`);
    props.getMovies(title, numPage);
    console.log(props.movies);
  }

  function handleNext(event) {
    numPage++;
    event.preventDefault();
    props.getMovies(title, numPage);
    history.push(`/search/${numPage}&title=${title}`);
    console.log(props.movies);
  }

  return (
    <div className="searchContainer">
      {props.movies ? (
        <div className="resultContainer">
          <div id="moviesList">
            {props.movies.map((movie) => (
              <div className="movieCard" key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`} id={"notUnderlined"}>
                  {movie.Poster === "N/A" ? (
                    <div className="notPoster">
                      <img alt="block" src={Blocked} width="150" height="150" />
                      <span id="notTitle">
                        {movie.Title} ({movie.Year})
                      </span>
                    </div>
                  ) : (
                    <img alt="poster" className="poster" src={movie.Poster} />
                  )}
                </Link>

                {props.favorites.indexOf(movie) === -1 ? (
                  <button
                    className="fav"
                    onClick={() => props.addMovieFavorite(movie)}
                  >
                    ☆
                  </button>
                ) : (
                  <button
                    className="favs"
                    onClick={() => props.removeMovieFavorite(movie.imdbID)}
                  >
                    ☆
                  </button>
                )}
              </div>
            ))}
          </div>
          <div id="containerPrevNext">
            <button className="prevNextButton">
              <img
                alt="prev"
                src={Prev}
                className="prevNext"
                onClick={(e) => handlePrev(e)}
              />
            </button>
            <button className="prevNextButton">
              <img
                alt="prevnext"
                src={Next}
                className="prevNext"
                onClick={(e) => handleNext(e)}
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="errorContainer">
          <h1 className="errorMsg">
            Sorry! We can't find a movie that matches your search. Try again!
          </h1>
          <img alt="cono" src={Cono} width="100" height="100" />
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    favorites: state.moviesFavourites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title, numPage) => dispatch(getMovies(title, numPage)),
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
