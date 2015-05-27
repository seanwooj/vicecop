json.(@vice, :id, :name, :description, :created_at, :updated_at, :user_vices)

if @vice.featured_image
  json.featured_image(@vice.featured_image, :image_url)
end

