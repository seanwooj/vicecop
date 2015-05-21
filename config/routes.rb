Rails.application.routes.draw do
  devise_for :users

  resources :vices, :only => [:index, :create, :show] do
    resources :user_vices, :only => [:index]
  end

  resources :user_vices, :only => [:index, :show, :create, :destroy] do
    put '/deactivate', :to => 'user_vices#deactivate'
    resources :checkins, :only => [:create]
  end

  resources :attached_images, :only => [:create]
  
  root :to => 'application#angular'
end
