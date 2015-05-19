class AddImageAndNameToAttachedImages < ActiveRecord::Migration
  def change
    add_column :attached_images, :name, :string, :null => false
    add_attachment :attached_images, :image
  end
end
