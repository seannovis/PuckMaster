Rails.application.routes.draw do

  resources :draftees, only: [:index, :show]
  resources :teams, only: [:index] do 
    resources :players, only: [:index]
    resources :stats, only: [:index]
  end
  resources :players, only: [:destroy, :show, :update, :create]

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
