class AddUserIdToAttachedImage < ActiveRecord::Migration
  def change
    add_column :attached_images, :user_id, :integer
  end
end
