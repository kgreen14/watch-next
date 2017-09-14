class Api::FavoritesController < ApplicationController
    def show
        @favorite = Favorite.find(params[:id])
        @movies = @favorite.movies
        render json:{
            favorite: @favorite,
            movies: @movies
        } 
    end
end
