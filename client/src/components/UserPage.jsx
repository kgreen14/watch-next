import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import MovieSearch from './MovieSearch'
import styled from "styled-components";

const UserCardContent = styled.div`
    margin: auto;
    margin-top: 20px;
    width: 40%;
    background-color: #333333;
    text-decoration: none;
    color: white;
    margin-bottom: 20px;
    padding: 2px 16px;background-color: #333333;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      favorites: []
    };
  }

  componentWillMount() {
    const userId = this.props.match.params.id;
    this._fetchUser(userId)
  }

  _fetchUser = async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}`)
      console.log(response)
      await this.setState({user: response.data.user, favorites: response.data.favorites});
      return response.data
    }
    catch (err) {
      await this.setState({error: err.message})
      return err.message
    }
  } 

  render() {
    return (
      <UserCardContent>
        <img src={this.state.user.photo_url} alt="" />
        <h1>{this.state.user.f_name}</h1>
        <h1>{this.state.user.l_name}</h1>
        <h2>{this.state.user.email}</h2>
        {this.state.favorites.map(favorite => (
          <div key={favorite.id}>
            <h1><Link to={`/users/${this.state.user.id}/favorites/${favorite.id}`} >{favorite.title}</Link></h1>
            
          </div>
        ))}
      </UserCardContent>
    );
  }
}

export default UserPage;  