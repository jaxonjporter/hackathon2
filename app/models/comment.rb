class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :video, dependent: :destroy
end
