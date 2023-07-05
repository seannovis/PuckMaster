class TeamsController < ApplicationController
    
    def index
        teams = Team.all 
        render json: teams, status: :ok
    end

end
