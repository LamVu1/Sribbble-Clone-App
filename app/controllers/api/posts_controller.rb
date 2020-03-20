class Api::PostsController < ApplicationController

    def create
        
        @post = Post.new(post_params)
        
        @post.author_id = current_user.id
        
        if @post.save
            render "api/posts/show"
        else
            render json:
            @post.errors.full_messages, status: 422
        end
    end

    def index
        @post = Post.all
        render :index
    end

    def show
        
        @post = Post.where(author_id: params[:author_id])
        if @post
            render :index
        else
        render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        
        @post = Post.find(params[:id])
        @post.update_attribute(:view, params[:post][:view])
        if @post.save
            render "api/posts/show"
        else
        render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        render "api/posts/show"
    end

    private
    def post_params
        
        params.require(:post).permit(:title, :description, :image, :author_id)
    end
end
