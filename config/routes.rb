Rails.application.routes.draw do
  namespace :api do
    resources :movies
    resources :users do
      resources :favorites
    end
  end
end
