class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            if user.admin && params[:token].present?
                token = AdminToken.find_by(token: params[:token])
                if token
                    user.token = params[:token]
                    session[:admin_id] = token.id
                    render json: user, status: :ok
                else
                    render json: { error: "Admin token not valid" }, status: :unprocessable_entity
                end
            else
                session[:user_id] = user.id       
            end
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
