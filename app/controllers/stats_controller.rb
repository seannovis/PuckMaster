class StatsController < ApplicationController
    
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  
    def index
        if params[:team_id]
            team = Team.find(params[:team_id])
            render json: team, serializer: StatTeamSerializer, status: :ok
        else
            stats = Stat.all
            render json: stat, each_serializer: StatSerializer, status: :ok
        end
    end
  
    private 
  
    def render_not_found
      render json: { error: "Team not found" }, status: :not_found
    end
  end
  