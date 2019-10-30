class Api::LikesController < ApplicationController

    def create
        @like = Like.new
        @like.post_id = params[:post_id]
        @like.user_id = current_user.id
        if @like.save
            render "api/likes/show"
        else
            render json:
            @like.errors.full_messages, status: 422
        end
    end

    def index
        @likes = Like.where(post_id: params[:post_id])
        render "api/likes/index"
    end

    def destroy
        @like = Like.find_by(post_id: params[:post_id], id: params[:id])
        @like.destroy
        render "api/likes/show"
    end

end
