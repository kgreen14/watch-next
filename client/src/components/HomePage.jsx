import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>I AM THE HOMEPAGE</h1>
        </div>
      </Router>
    );
  }
}

export default HomePage;