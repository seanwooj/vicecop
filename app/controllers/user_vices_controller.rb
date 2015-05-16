class UserVicesController < ApplicationController
  
  def index
    if current_user
      render :json => current_user.user_vices, :include => :vice
    else
      render :json => {}, :status => :unauthorized
    end
  end
end