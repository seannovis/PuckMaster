class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            if user.admin
                session[:admin_id] = user.id
            else
                session[:user_id] = user.id       
            end
        render json: user, status: :ok
        else
            unauthorized_error
        end
    end

    def destroy
        if session[:user_id]
            session.destroy
            head :no_content
        elsif session[:admin_id]
            session.destroy
            head :no_content
        else
            unauthorized_error
        end
    end

    private

    def unauthorized_error
        render json: {error: "Incorrect username or password"}, status: :unauthorized
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :token, :bio, :icon, :admin)
    end

end
