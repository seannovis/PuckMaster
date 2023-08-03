class PlayersController < ApplicationController

before_action :admin_authorization, only: [:update, :create]
before_action :viewing_authorization, only: [:index, :show]

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        if params[:team_id]
            team = Team.find(params[:team_id])
            render json: team, serializer: PlayerTeamSerializer, status: :ok
        else
            render json: Player.all, each_serializer: PlayerSerializer, status: :ok
        end
    end

    def show
        player = Player.find(params[:id])
        render json: player, serializer: PlayerProfileSerializer, status: :ok
    end

    def update
        player = Player.find(params[:id])
        player.update!(player_params)
        render json: player, status: :ok
    end

    def create
        player = Player.create!(player_params)
        render json: player, serializer: PlayerProfileSerializer, status: :created
    end

    private

    def player_params
        params.permit(:team_id, :full_name, :jersey_number, :position, :active, :current_team, :hand)
    end

    def render_not_found
        render json: {error: "Player not found"}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def admin_authorization
        render json: {error: "Only admins can update content"}, status: :unauthorized unless session.include? :admin_id
    end

    def viewing_authorization
        unless session.include?(:admin_id) || session.include?(:user_id)
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

end
