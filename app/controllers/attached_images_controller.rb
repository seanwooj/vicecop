class AttachedImagesController < ApplicationController
  def create
    am = AttachedImage.create(attached_images_params.merge(:user_id => current_user.id))
    render :json => am
  end

  private

  def attached_images_params
    params[:image] = params[:file]
    params.permit(:image, :name)
  end
end