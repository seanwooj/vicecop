class Checkin < ActiveRecord::Base
  belongs_to :user_vice
  belongs_to :user

  has_many :attached_images, :as => :attachable

  def to_json(options = {})
    super(options.merge(:include => :attached_images))
  end
end
