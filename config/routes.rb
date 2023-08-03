Rails.application.routes.draw do

  resources :draftees, only: [:index, :show]
  resources :teams, only: [:index, :show] do 
    resources :players, only: [:index]
    resources :stats, only: [:index]
    resources :draftees, only: [:index]
  end
  resources :players, only: [:index, :show, :update, :create]

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  patch '/token/:username', to: 'users#update_token'
  patch '/bio/:username', to: 'users#update_bio'
  patch '/username/:username', to: 'users#update_username'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'



end
