import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

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
      <div>
        <img src={this.state.user.photo_url} alt="" />
        <h1>{this.state.user.f_name}</h1>
        <h1>{this.state.user.l_name}</h1>
        <h2>{this.state.user.email}</h2>
        {this.state.favorites.map(favorite => (
          <div key={favorite.id}>
            <Link to={`/users/${this.state.user.id}/favorites/${favorite.id}`} >{favorite.title}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default UserPage;  