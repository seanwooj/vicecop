class VicesController < ApplicationController

  def index
    render :json => Vice.all
  end

  def show
    render :json => Vice.find(params[:id]), :include => :user_vices
  end

  def create
    
  end

  def create_and_add_user_vice

  end

end