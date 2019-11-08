class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
    
        if @user.save
          login(@user)
          render "api/users/show"
        else
          render json: @user.errors.full_messages, status: 422
        end
    end
    
    def show
      
      @user = User.find(params[:userId])
      if @user
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def update
      
      @user = User.find(params[:message][:id])
      @user.update_attribute(:message, params[:message][:message])
      if @user.save
        render "api/users/show"
      else
      render json: @user.errors.full_messages, status: 422
      end
    end
       
    
      private
    
      def user_params
        params.require(:user).permit(:username,:id, :password, :email, :location, :message, :userId)
      end
end
