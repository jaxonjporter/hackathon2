class Video < ApplicationRecord
  belongs_to :user
  belongs_to :playlist
end
