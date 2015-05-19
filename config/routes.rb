Rails.application.routes.draw do
  devise_for :users

  resources :user_vices, :only => [:index, :show, :create, :destroy] do
    resources :checkins, :only => [:create]
  end

  resources :attached_images, :only => [:create]
  
  root :to => 'application#angular'
end
