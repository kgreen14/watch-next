import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MoviePage extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>I AM THE SINGLE MOVIE PAGE</h1>
        </div>
      </Router>
    );
  }
}

export default MoviePage;