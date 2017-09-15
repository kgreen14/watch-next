import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieSearch from './MovieSearch'

class FavoritePage extends Component {
    constructor() {
        super();
        this.state = {
            favorite: {},
            movies: []
        }
    }
    componentWillMount() {
        this._fetchFavoritePage()
    }

    _fetchFavoritePage = async () => {
        const id = this.props.match.params.userId
        const favoriteId = this.props.match.params.id
        try {
            const res = await axios.get(`/api/users/${id}/favorites/${favoriteId}`);
            await this.setState({favorite: res.data.favorite, movies: res.data.movies});
            return res.data;
            console.log(this.state.movies)
        }
        catch (err) {
            console.log(err)
        }
    }

    _deleteMovie = async (movieID) => {
        const userId = this.props.match.params.userId
        try {
            const res = await axios.delete(`/api/users/${userId}/movies/${movieID}`);
            this.setState({favorite: res.data.favorite, movies: res.data.movies})
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
          <div>
              
        <MovieSearch id={this.props.match.params.userId} />
          {this.state.movies.map(movie => (
            <div key={movie.id}>
              <img src={movie.poster} alt="" />
              <h1>{movie.title}</h1>
              <h3>Release Date: {movie.released}</h3>
              <h3> {movie.id} </h3>
              <h3>Rated: {movie.rated}</h3>
              <p><strong>Plot:</strong> {movie.plot}</p>
              <button onClick={() => this._deleteMovie(movie.id)} className="default-button">Delete Movie From Favorites</button>
            </div>
            ))}
          </div>
    );
  }
}

export default FavoritePage;