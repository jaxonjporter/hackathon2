class Video < ApplicationRecord
  belongs_to :user
  belongs_to :playlist, through: :user
end
