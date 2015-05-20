class UserVicesController < ApplicationController
  
  def index
    if current_user
      if params[:vice_id]
        user_vices = current_user.user_vices.where(:vice_id => params[:vice_id])
      else
        user_vices = current_user.user_vices 
      end
      render :json => user_vices, :include => :vice
    else
      render :json => {}, :status => :unauthorized
    end
  end

  def create
    if current_user
      render :json => current_user.user_vices.find_or_create_by(:vice_id => params[:vice_id])
    else
      render :json => {}, :status => :unauthorized
    end
  end

  def show
    if current_user && @user_vice = current_user.user_vices.find(params[:id])
      render 'user_vices/show'
    else
      render :json => {}, :status => :unauthorized
    end
  end
end