Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :movies
      resources :favorites
    end
  end
end
