class Api::FollowsController < ApplicationController

    def create
        @follow = Follow.new
        
        @follow.user_id = params[:author_id]
        @follow.follower_id = current_user.id
        if @follow.save
            render "api/follows/show"
        else
            render json:
            @follow.errors.full_messages, status: 422
        end
    end

    def index
        
        @follows = Follow.where(user_id: params[:author_id])
        
        render "api/follows/index"
    end

    def destroy
        
        @follow = Follow.find_by(user_id: params[:id], follower_id: current_user.id)
        @follow.destroy
        render "api/follows/show"
    end
 
end
