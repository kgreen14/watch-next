import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import axios from 'axios';

class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  componentWillMount() {
    const movieId = this.props.match.params.id;
    this._fetchMovie(movieId)
  }

  _fetchMovie = async (movieId) => {
    try {
      const response = await axios.get(`/api/movies/${movieId}`)
      console.log(response)
      await this.setState({movie: response.data});
      return response.data
    }
    catch (err) {
      await this.setState({error: err.message})
      return err.message
    }
  } 

  render() {
    return (
      <div>
        <img src={this.state.movie.poster} alt="" />
        <h1>{this.state.movie.title}</h1>
        <h3>Release Date: {this.state.movie.released}</h3>
        <h3>Rated: {this.state.movie.rated}</h3>
        <p><strong>Plot:</strong> {this.state.movie.plot}</p>
      </div>
    );
  }
}


export default MoviePage;