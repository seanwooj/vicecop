Rails.application.routes.draw do
  devise_for :users

  resources :user_vices, :only => [:index, :show, :create, :destroy]
  
  root :to => 'application#angular'
end
