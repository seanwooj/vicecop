class Checkin < ActiveRecord::Base
  reverse_geocoded_by :latitude, :longitude

  belongs_to :user_vice
  belongs_to :user

  has_many :attached_images, :as => :attachable

  def to_json(options = {})
    super(options.merge(:include => :attached_images))
  end
end
