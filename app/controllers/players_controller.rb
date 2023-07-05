class PlayersController < ApplicationController

before_action :authorized, only: [:update, :create, :destroy]

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
        player = find_player
        render json: player, status: :ok
    end

    def update
        player = find_player
        player.update!(player_params)
        render json: player, status: :ok
    end

    def create
        player = Player.create!(player_params)
        render json: player, serializer: PlayerIdSerializer, status: :created
    end

    def destroy
        player = find_player
        player.destroy
        head :no_content
    end

    private

    def player_params
        params.permit(:team_id, :full_name, :jersey_number, :position)
    end

    def find_player
        Player.find(params[:id])
    end

    def render_not_found
        render json: {error: "Player not found"}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorized
        render json: {error: "Unauthorized"}, status: :unauthorized unless session.include? :user_id
    end

end
