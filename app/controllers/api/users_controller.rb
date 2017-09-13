class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        @favorites = @user.favorites.all
        render json: {
            user: @user,
            favorites: @favorites
        }
        
    end

    def create
        @user = User.create(user_params)
        if @user.save
            render json: @user
        else
            render json: {
                message: "error creating user"
            }
        end
    end

    def update
        @user = User.find(params[:id])
        @user.update(user_params)
        render json: @user
        
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render json: {
            message: 'User successfully deleted'
        }
    end

    private
    def user_params
        params.require(:user).permit(:f_name, :l_name, :email, :photo_url, :password)
    end
end
