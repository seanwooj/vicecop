class VicesController < ApplicationController

  def index
    render :json => Vice.all
  end

  def show
    @vice = Vice.find(params[:id])
    render 'vices/show'
  end

  def create
    # CREATES A VICE
    # AND A USER VICE.
    if current_user
      vice = Vice.create(vice_params)
      user_vice = current_user.user_vices.create(:vice_id => vice.id)
      render :json => vice, :include => :user_vices
    else
      render :json => {}, :status => :unauthorized
    end
  end

  private

  def vice_params
    params.require(:vice).permit(:name)
  end

end