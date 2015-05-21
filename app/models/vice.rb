class Vice < ActiveRecord::Base
  has_many :user_vices, :dependent => :destroy
end
