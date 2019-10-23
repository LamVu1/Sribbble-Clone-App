class Api::CommentsController < ApplicationController

    def create 
        @comment = Comment.new(comment_params)
        @comment.post_id = params[:post_id]
        @comment.user_id = current_user.id
        if @comment.save
            render "api/comments/index"
        else
            render json:
            @comment.errors.full_messages, status: 422
        end
    end

    def index
        @comments = Comment.where(post_id: params[:post_id])
        render "api/comments/index"
    end

    def destroy
        @comments = Comment.where(post_id: params[:post_id], id: params[:id])        
        @comment.destroy
        render "api/comments/index"
    end

    private
    def comment_params
        params.require(:comment).permit(:body)
    end
end
