import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
componentDidMount () {
    const movieId = this.props.match.params.id;
    this.props.getDetail(movieId);
}

    render() {
        return (
            <div className='detailed'>
            <div className="moviecard">
                <div className='fotoTitulo'>
                <div className='tituloDet'>
                <h1>{this.props.movie.Title} ({this.props.movie.Year})</h1>
                <h2>{this.props.movie.Genre}</h2>
                <h4>Directed by: {this.props.movie.Director}</h4>
                <h4>Rating IMDB: {this.props.movie.imdbRating}</h4>
                </div>
                <img alt="peli" id='myMovie' src={this.props.movie.Poster}/>
                </div>
                <h3 className='sub-title'>About this movie:</h3>
                <p>{this.props.movie.Plot}</p>
                <h3 className='sub-title'>Movie Awards:</h3>
                <p>{this.props.movie.Awards}</p>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie:state.movieDetail,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDetail: idMovie => dispatch(getMovieDetail(idMovie)),
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(Movie);