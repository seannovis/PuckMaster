class UsersController < ApplicationController

before_action :authorized, only: :show

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def create
        if params[:password] != params[:password_confirmation]
            render json: {error: "Passwords do not match"}, status: :unprocessable_entity
        else
            user = User.create!(user_params)
            session[:user_id] = user.id 
            render json: user, status: :created
        end
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorized
        render json: {error: "Unauthorized"}, status: :unauthorized unless session.include? :user_id
    end

end
