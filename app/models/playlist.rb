class Playlist < ApplicationRecord
  belongs_to :user, depenedent: :destroy
end
