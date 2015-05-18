class CheckinsController < ApplicationController
  def create
    if current_user && user_vice = current_user.user_vices.find(params[:user_vice_id])
      checkin = user_vice.checkins.create(checkin_params.merge(:user_id => current_user.id))
      render :json => checkin
    else
      render :json => {}, :status => :unauthorized
    end
  end

  private

  def checkin_params
    params.require(:checkin).permit(:note)
  end
end