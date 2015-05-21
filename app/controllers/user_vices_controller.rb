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
      user_vice = current_user.user_vices.find_or_create_by(:vice_id => params[:vice_id])
      user_vice.active = true
      user_vice.save
      render :json => user_vice
    else
      render :json => {}, :status => :unauthorized
    end
  end

  def show
    if current_user && @user_vice = current_user.user_vices.includes(:checkins => [:attached_images]).find(params[:id])
      render 'user_vices/show'
    else
      render :json => {}, :status => :unauthorized
    end
  end

  def deactivate
    if current_user
      user_vice = current_user.user_vices.find(params[:user_vice_id])
      user_vice.active = false
      if user_vice.save
        render :json => user_vice
      else
        render :json => {}, :status => :unprocessable_entity
      end
    else
      render :json => {}, :status => :unauthorized
    end
  end
end