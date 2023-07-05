class DrafteesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        draftees = Draftee.all 
        render json: draftees, status: :ok
    end

    def show
        draftee = Draftee.find(params[:id])
        render json: draftee, serializer: DrafteeShowSerializer, status: :ok
    end

    private 

    def render_not_found
        render json: {error: "Draftee doesn't exist"}, status: :not_found
    end

end
