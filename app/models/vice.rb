class Vice < ActiveRecord::Base
  has_many :user_vices, :dependent => :destroy

  has_one :featured_image, :as => :attachable, :class_name => 'AttachedImage'
end
