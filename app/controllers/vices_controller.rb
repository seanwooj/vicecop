class VicesController < ApplicationController

  def index
    render :json => Vice.all
  end

  def show
    render :json => Vice.find(params[:id]), :include => :user_vices
  end

  def create
    if current_user
      vice = Vice.create(vice_params)
      user_vice = current_user.user_vices.create(:vice_id => vice.id)
      render :json => vice, :include => :user_vices
    else
      render :json => {}, :status => :unauthorized
    end
  end

  def create_and_add_user_vice

  end

  private

  def vice_params
    params.require(:vice).permit(:name)
  end

end