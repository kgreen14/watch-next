import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserPage extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>I AM THE USER PAGE</h1>
        </div>
      </Router>
    );
  }
}

export default UserPage;