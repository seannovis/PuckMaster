class UsersController < ApplicationController
    before_action :authorized, only: :show
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
     
    def create
        if params[:token].present?
            token = AdminToken.find_by(token: params[:token], active: false)
            if token
                token.update(active: true)
                user = User.create!(user_params.merge(admin: true))
                session[:admin_id] = token.id
                render json: user, status: :created
            else
                render json: { error: "Admin token not valid" }, status: :unprocessable_entity
            end
        elsif params[:password] != params[:password_confirmation]
            render json: { error: "Passwords do not match" }, status: :unprocessable_entity
        else
            user = User.create!(user_params)
            session[:user_id] = user.id 
            render json: user, status: :created
        end
    end
  
    def show
        if session[:user_id]
            user = User.find(session[:user_id])
        elsif session[:admin_id]
            user = User.find(session[:admin_id])
        end
        render json: user, status: :ok
    end

    def update_bio
        user = find_user
        user.bio = user_params[:bio]
        user.save(validate: false)
        render json: user, status: :ok 
    end

    def update_token
        user = find_user
        token = AdminToken.find_by(token: params[:token], active: false)
        if token
            token.update(active: true)
            user.token = user_params[:token]
            session[:admin_id] = token.id
            user.admin = true                
            user.save(validate: false)
            render json: user, status: :ok 
        else
            render json: { error: "Admin token not valid" }, status: :unprocessable_entity
        end  
         
    end
  
    private
  
    def user_params
        params.permit(:username, :password, :password_confirmation, :token, :bio, :icon, :admin)
    end

    def find_user
        User.find_by(username: params[:username])
    end
  
    def render_unprocessable_entity
        render json: { error: "Must enter unique username and password" }, status: :unprocessable_entity
    end
  
    def authorized
        unless session.include?(:admin_id) || session.include?(:user_id)
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end
    
  end
  

  