import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieSearch from './MovieSearch'
import styled from 'styled-components';

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid red;
    border-radius: 3px;
    background-color: white;
`;

const MovieCard = styled.button`
    padding: 2px 16px;background-color: #333333;
    text-decoration: none;
    color: white;
    border-radius: 5px;
    width: 60%;
    margin-bottom: 20px;
`;


const FavoriteTitle = styled.div`
    color: white;
    font-size: 200%;
    margin-top: 20px;
    margin-bottom: 25px;
    text-align: center;
`

const MovieCardContent = styled.div`
    margin: 0 auto;
    width: 60%;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
`

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
              <FavoriteTitle>{this.state.favorite.title}</FavoriteTitle>
        <MovieSearch id={this.props.match.params.userId} />
          {this.state.movies.map(movie => (
                <MovieCard>
                <div key={movie.id}>
              <img src={movie.poster} alt="" />
              <h1>{movie.title}</h1>
              <h3>Release Date: {movie.released}</h3>
              <h3>Rated: {movie.rated}</h3>
              <p><strong>Plot:</strong> {movie.plot}</p>
              <Button onClick={() => this._deleteMovie(movie.id)} className="default-button">Delete Movie</Button>
                </div>
                </MovieCard>
            ))}
          </div>
    );
  }
}

export default FavoritePage;