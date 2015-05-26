class Checkin < ActiveRecord::Base
  reverse_geocoded_by :latitude, :longitude

  belongs_to :user_vice
  belongs_to :user

  has_many :attached_images, :as => :attachable

  def self.near_here(user, location)
    self.near(location).where(:user_id => user.id)
  end

  # THIS DESPERATELY NEEDS A REFACTOR
  # also pretty brittle, and there HAS to be a better way to make this work
  def self.near_here_and_around_this_time(user, location)
    # get the hour now in the format of 22 or 02 or whatever
    now_hour = Time.zone.now.to_s(:time)[0..1].to_i # THIS SUCKS
    # call near here and use a select
    self.near_here(user, location).select do |checkin|
      # get the checkin hour in the same format as above
      checkin_hour = checkin.created_at.to_s(:time)[0..1].to_i

      # need to ensure some kind of granularity at this point. for now
      # just checks within a 4 hour block, which is too big
      # is the checkin hour more than now - 2 and
      # is it less than now + 2?
      checkin_hour > now_hour - 2 && checkin_hour < now_hour + 2
    end
  end

  def to_json(options = {})
    super(options.merge(:include => :attached_images))
  end
end
