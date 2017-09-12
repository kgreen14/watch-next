Rails.application.routes.draw do
  namespace :api do
    resources :movies, only: [:show]
    resources :users do
      resources :favorites
    end
  end
end
