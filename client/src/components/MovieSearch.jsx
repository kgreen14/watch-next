import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from "styled-components";


const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid green;
    border-radius: 3px;
    background-color: white;
`;

const MovieCardContent = styled.div`
    margin: 0 auto;
    width: 60%;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
`

// const PageHeader = styled.div`
//     font-size: 250%;
//     text-align: center;
//     background-color: #2D2D2A;
//     color: white;
//     border-radius: 0px 0px 5px 5px;
//     margin-bottom: 20px;
// `

// const SearchStyle = styled.div`
//     input {
//         width: 45vw;
//         margin: 10px;
//         border-radius: 2px;
//         padding: 5px;
//         border: none;
//     }
// `
const SearchHeader = styled.div`
    color: white;
    font-size: 200%;
    margin-top: 20px;
    margin-bottom: 25px;
    text-align: center;
`
const MovieCard = styled.div`
    margin: auto;
    margin-top: 20px;
    width: 50%;
    background-color: #333333;
    color: white;
    margin-bottom: 20px;
    padding: 2px 16px;background-color: #333333;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

class MovieSearch extends Component {
    constructor() {
        super();
        this.state = {
            movie: {},
            search: ''
        }
    }

    _searchMovie = async (e) => {
        e.preventDefault();
        const search = this.state.search
        const url = `https://www.omdbapi.com/?apikey=d5a22275&t=${search}`
        try {
            const res = await axios.get(url, 
              { transformRequest: [(data, headers) => {
                delete headers['access-token']
                delete headers['uid']
                delete headers['client']
                delete headers['expiry']
                delete headers['token-type']
                delete headers.common
                return data;
              }]
            });
            console.log(res.data)
            await this.setState({movie: res.data})
        } catch (err) {
            console.log(err);
        }
    }
    
    _addMovie = () => {
        console.log('Function hit')
        const id = this.props.id
        const payload ={
            genre: this.state.movie.Genre,
            plot: this.state.movie.Plot, 
            released: this.state.movie.Released, 
            title: this.state.movie.Title, 
            rated: this.state.movie.Rated, 
            poster: this.state.movie.Poster
        }
        try {
            const res = axios.post(`/api/users/${id}/movies`, payload)
            console.log(res)
        } catch (err) {
            console.log(err);
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state}
        newState[e.target.name] = e.target.value
        this.setState(newState)
    }

    render() {
        const id = this.props.id
        const showMovie = function() {
            return <div>
                    <img src={this.state.movie.Poster} alt="" />
                    <h1>{this.state.movie.Title}</h1>
                    <h3>Release Date: {this.state.movie.Released}</h3>
                    <h3>Rated: {this.state.movie.Rated}</h3>
                    <p><strong>Plot:</strong> {this.state.movie.Plot}</p>
                </div>
        }
        console.log(this.state.movie)
        return (
            <div>
                <form>
                    <div>
                        <input onChange={this._handleChange} placeholder="search for movie" type="text" name="search" value={this.state.search} />
                        <Button onClick={this._searchMovie} className="default-button">Submit</Button>
                    </div>   
                </form>

                {this.state.movie.Title ? 
                <MovieCard>
                    <img src={this.state.movie.Poster} alt="" />
                    <h1>{this.state.movie.Title}</h1>
                    <h3>Release Date: {this.state.movie.Released}</h3>
                    <h3>Rated: {this.state.movie.Rated}</h3>
                    <p><strong>Plot:</strong> {this.state.movie.Plot}</p>
                    <Button onClick={this._addMovie} className="default-button">Add Movie to Favorites</Button>
                </MovieCard>
                 : ''}
                
      </div>
      

    );
  }
}

export default MovieSearch;