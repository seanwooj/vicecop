class Vice < ActiveRecord::Base
  has_many :users
  has_many :user_vices
end
