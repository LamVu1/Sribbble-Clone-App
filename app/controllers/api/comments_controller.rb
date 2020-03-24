class Api::CommentsController < ApplicationController

    def create 
        @comment = Comment.new(comment_params)
        @comment.post_id = params[:post_id]

        if current_user == nil 
            render json: ['Please log in'], status: 422
        else
            @comment.user_id = current_user.id
            if @comment.save
                render "api/comments/show"
            else
                render json:
                @comment.errors.full_messages, status: 422
            end
        end
    end

    def index
        @comments = Comment.where(post_id: params[:post_id])
        render "api/comments/index"
    end

    def destroy
        @comment = Comment.find_by(post_id: params[:post_id], id: params[:id])        
        @comment.destroy
        render "api/comments/show"
    end

    private
    def comment_params
        params.require(:comment).permit(:body)
    end
end
