class Api::LikesController < ApplicationController

    def create
        @like = Like.new
        
        @like.post_id = params[:post_id]
        
        if current_user==nil
            render json: ['Please log in'], status: 422
        else
            @like.user_id = current_user.id

            if @like.save
                render "api/likes/show"
            else
                render json:
                @like.errors.full_messages, status: 422
            end
        end
    end

    def index
        @likes = Like.where(post_id: params[:post_id])
        render "api/likes/index"
    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy
        render "api/likes/show"
    end

end
