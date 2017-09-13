import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class FavoritePage extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>I AM THE FAVORITE PAGE</h1>
        </div>
      </Router>
    );
  }
}

export default FavoritePage;