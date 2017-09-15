class Api::MoviesController < ApplicationController
    def show
        @movie = Movie.find(params[:id])
        render json: @movie
    end

    def create
        @user = User.find params[:user_id]
        @favorite = @user.favorites.first
        @favorite.movies.create!(movie_params)
        @movies = @favorite.movies
        render json: {
            favorite: @favorite,
            movies: @movies
        }
    end

    def destroy
        @movie = Movie.find(params[:id])
        @movie.destroy
        @user = User.find params[:user_id]
        @favorite = @user.favorites.first
        @movies = @favorite.movies
         render json:{
            favorite: @favorite,
            movies: @movies
        } 
    end

    private
    def movie_params
        params.require(:movie).permit(:genre, :title, :plot, :poster, :released, :rated)
    end
end
