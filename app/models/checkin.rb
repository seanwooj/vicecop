class Checkin < ActiveRecord::Base
  belongs_to :user_vice
  belongs_to :user
end
