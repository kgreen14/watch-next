import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Nav = styled.div`
  width: 97%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5%;
  background-color: #333333;
  a {
    text-decoration: none;
    margin: 0 5px;
    &:visited {
      color: white;
    }
  }
`;

const User = styled.span`
  color: white;
`;

const Site = styled.div`
  font-size: 300%;
  font-weight: bold;
  color: white;
`;

const Button = styled.button`
  background-color: #DB2B39;
  font-size: 90%;
  border: 1.5px solid white;
  border-radius: 5px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 7px;
  padding-right: 7px;
  color: white;
  :hover {
    background-color: white;
    color: #DB2B39;
  }
`
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedIn: false
    };
  }

//   componentWillMount() {
//     this._isLoggedIn();
//   }
//   componentWillReceiveProps() {
//     this._isLoggedIn();
//   }

//   _isLoggedIn = async () => {
//     const response = await axios.get("/auth/validate_token");
//     this.setState({
//       user: response.data.data,
//       loggedIn: response.data.success
//     });
//   };
  
//   _logOut = async () => {
//     console.log("CLICK");
//     const response = await axios.delete("/auth/sign_out");
//     //Forces refresh of browser
//     window.location.reload();
//   };

  render() {
    if (this.state.loggedIn) {
      return (
        <Nav>
          <Link to="/">
            <Site>Watch Next</Site>
          </Link>
          <div>
            <User>Signed In As: {this.state.user.email}</User>
            <a href="#" onClick={this._logOut}><Button>Log Out</Button></a>
          </div>
        </Nav>
      );
    }
    return (
      <Nav>
        <Link to="/">
          <Site>Watch Next</Site>
        </Link>
        <div>
          <Link to="/signup"><Button>Sign Up</Button></Link>
          <Link to="/users/1"><Button>Log In</Button></Link>
        </div>
      </Nav>
    );
  }
}

export default NavBar;