class Api::MoviesController < ApplicationController
    def show
        @movie = Movie.find(params[:id])
        render json: @movie
    end

    def create
        @user = User.find params[:id]
        @favorite = Favorite.find(params[:favorite_id])
        @favorite.movies.create(movie_params)
    end

    def destroy
        @movie = Movie.find(params[:id])
        @movie.destroy
    end

    private
    def movie_params
        params.require(:movie).permit(:genre, :favorite_id, :title, :plot, :poster, :released, :rated)
    end
end
