class CheckinsController < ApplicationController
  def create
    if current_user && user_vice = current_user.user_vices.find(params[:user_vice_id])
      checkin = user_vice.checkins.create(checkin_params.merge(:user_id => current_user.id))

      # if we've already added an image, and set it in the scope in the user_vices_controller js
      # add it to the attached_images collection in the checkin.
      # todo ADD THIS TO A DELAYED JOB. IMAGE ATTACHMENT SHOULD'T HOLD UP THE WHOLE APP.
      if params[:image]
        checkin.attached_images << AttachedImage.find(params[:image][:id])
      end

      render :json => checkin
    else
      render :json => {}, :status => :unauthorized
    end
  end

  private

  def checkin_params
    params.require(:checkin).permit(:note, :longitude, :latitude)
  end
end