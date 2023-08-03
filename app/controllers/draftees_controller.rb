class DrafteesController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

before_action :viewing_authorization, only: [:index, :show]

    def index
        if params[:team_id]
            team = Team.find(params[:team_id])
            render json: team, serializer: DrafteeTeamSerializer, status: :ok
        else
            render json: Draftee.all, each_serializer: DrafteeSerializer, status: :ok
        end
    end

    def show
        draftee = Draftee.find(params[:id])
        render json: draftee, serializer: DrafteeProfileSerializer, status: :ok
    end

    private 

    def render_not_found
        render json: {error: "Draftee doesn't exist"}, status: :not_found
    end

    def viewing_authorization
        unless session.include?(:admin_id) || session.include?(:user_id)
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

end
