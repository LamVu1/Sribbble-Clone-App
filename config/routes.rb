Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    
    resource :user, only: [:create, :update]

    resources :follows, only: [:create, :index, :destroy]

    resource :session, only: [:create, :destroy]
    #resources :posts, only: [:create, :index, :destroy]

    resources :likes, only: [:create, :index, :destroy] 
        


    resources :posts, only: [:create, :index, :destroy] do 
      
      resources :comments, only: [:create, :index, :destroy] 
      
    end
    
  end


  root "static_pages#root"

end
