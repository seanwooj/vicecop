json.(@user_vice, :id, :vice_id, :vice, :last_checkin_time)

unless @user_vice.checkins.nil?
  json.checkins(@user_vice.checkins) do |checkin|
    json.(checkin, :id, :note, :created_at, :user_vice_id)

    json.attached_images(checkin.attached_images) do |attached_image|
      json.(attached_image, :id, :thumbnail_url)
    end
  end
end
