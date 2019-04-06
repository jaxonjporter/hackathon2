class Playlist < ApplicationRecord
  belongs_to :user
  has_many :videos, through: :user
end
