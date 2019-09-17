class Api::PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        
        @post.author_id = current_user.id
        
        if @post.save
            render "api/posts/index"
        else
            render json:
            @post.errors.full_messages, status: 422
        end
    end

    def index
        @posts = Post.all
        render :index
    end

    private
    def post_params
        
        params.require(:post).permit(:title, :description, :image)
    end
end
