class AddActiveFlagToUserVice < ActiveRecord::Migration
  def change
    add_column :user_vices, :active, :boolean, :default => true
  end
end
