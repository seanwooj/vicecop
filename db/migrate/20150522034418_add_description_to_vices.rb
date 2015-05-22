class AddDescriptionToVices < ActiveRecord::Migration
  def change
    add_column :vices, :description, :text
  end
end
