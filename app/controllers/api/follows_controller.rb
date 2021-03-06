class Api::FollowsController < ApplicationController

    def create
        @follow = Follow.new
        
        @follow.user_id = params[:author_id]
        if current_user == nil
            render json: ['Please log in'], status: 422
        else
            @follow.follower_id = current_user.id
            
            if @follow.save
                render "api/follows/show"
            else
                render json:
                @follow.errors.full_messages, status: 422
            end
        end
    end

    def index
        
        @follows = Follow.where(user_id: params[:author_id])
        
        render "api/follows/index"
    end

    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy
        render "api/follows/show"
    end
 
end
