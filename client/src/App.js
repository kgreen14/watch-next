import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserPage from "./components/UserPage";
import FavoritePage from "./components/FavoritePage";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import MoviePage from "./components/MoviePage";
import LoginPage from "./components/LoginPage";
import Search from "./components/Search";
import MovieSearch from "./components/MovieSearch";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <nav>
              <Link to="/"><h1>I AM THE NAVBAR</h1></Link>
            </nav>
            <div>
              <Link to="/signup">Sign Up</Link><br />
              <Link to="/login">Login Page</Link><br />
              <Link to="/search">Search Page</Link><br />
              <Link to="/users/1">Single User</Link><br />
              <Link to="/users/1/favorites/1">Single Favorite</Link><br />
              <Link to="/movies/3">Single Movie</Link><br />
              

            </div>
          </div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/search" component={MovieSearch} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/movies/:id" component={MoviePage} />
          <Route exact path="/users/:id" component={UserPage} />
          <Route exact path="/users/:userId/favorites/:id" component={FavoritePage} />
        </div>
      </Router>
    );
  }
}

export default App;
