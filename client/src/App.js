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
import NavBar from './components/NavBar';
import { injectGlobal } from "styled-components"
import './App.css';

injectGlobal `
  body {
    background-image: url("http://www.joblo.com/posters/images/full/wonder_woman_poster_4.jpg");
    background-size: 100%;
    background-attachment: fixed;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
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
