import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Search extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>I AM THE SEARCH COMPONENT</h1>
        </div>
      </Router>
    );
  }
}

export default Search;