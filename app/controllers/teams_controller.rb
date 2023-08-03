class TeamsController < ApplicationController

before_action :viewing_authorization, only: [:index, :show]
    
    def index
        teams = Team.all 
        render json: teams, status: :ok
    end

    def show 
        team = Team.find(params[:id])
        render json: team, status: :ok
    end

    private
    
    def viewing_authorization
        unless session.include?(:admin_id) || session.include?(:user_id)
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

end
