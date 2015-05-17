class UserVicesController < ApplicationController
  
  def index
    if current_user
      render :json => current_user.user_vices, :include => :vice
    else
      render :json => {}, :status => :unauthorized
    end
  end

  def show
    if current_user && user_vice = current_user.user_vices.find(params[:id])
      render :json => user_vice, :include => [:vice, :checkins]
    else
      render :json => {}, :status => :unauthorized
    end
  end
end