import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>I AM THE LOGIN PAGE</h1>
        </div>
      </Router>
    );
  }
}

export default LoginPage;