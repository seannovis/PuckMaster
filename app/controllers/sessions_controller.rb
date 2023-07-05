class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            unauthorized_error        
        end
    end

    def destroy
        if session[:user_id]
            session.destroy
            head :no_content
        else
            unauthorized_error
        end
    end

    private

    def unauthorized_error
        render json: {error: "Unauthorized"}, status: :unauthorized
    end

end
