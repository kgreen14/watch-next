import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const FavoriteTitle = styled.div`
    margin: auto;
    width: 50%;
    color: white;
    font-size: 200%;
    margin-top: 50px;
    margin-bottom: 25px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
`

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div>
          <FavoriteTitle>SAVE YOUR FAVORITE MOVIES AND FIND OUT WHAT TO WATCH NEXT</FavoriteTitle>
        </div>
      </Router>
    );
  }
}

export default HomePage;