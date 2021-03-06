class Api::CommentlikesController < ApplicationController

    def create
        
        @comment_like = CommentLike.new
        @comment_like.comment_id = params[:commentLike][:comment_id]
        @comment_like.post_id = params[:commentLike][:post_id]

        if current_user ==nil
            render json: ['Please log in'], status: 422
        else

            @comment_like.user_id = current_user.id
            
            if @comment_like.save
                render "api/comment_likes/show"
            else
                render json:
                @comment_like.errors.full_messages, status: 422
            end
        end
    end

    def index
        
        # @comment_likes = CommentLike.join(:posts).where(post_id: params[:post_id])
        @comment_likes = CommentLike.where(post_id: params[:post_id])
        render "api/comment_likes/index"
    end

    def destroy
        
        @comment_like = CommentLike.find(params[:id])
        @comment_like.destroy
        render "api/comment_likes/show"
    end

end
