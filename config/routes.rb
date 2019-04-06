Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :playlists do
      resources :videos
    end

    resources :videos do
      resources :comments
    end
  end   
end
