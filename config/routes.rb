Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    
    resource :user, only: [:create, :update, :show]

    resources :follows, only: [:create, :index, :destroy]

    resource :session, only: [:create, :destroy]

    resources :likes, only: [:create, :index, :destroy] 
        
    
    resources :posts, only: [:create, :index,:show, :destroy, :update] do 
      
      resources :comments, only: [:create, :index, :destroy] do
      
        resources :commentlikes, only: [:create, :index, :destroy]

      end

    end

    
  end


  root "static_pages#root"

end
