class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.belongs_to :user, foreign_key: true
      t.string :title
      t.string :video_url
      t.boolean :liked
      t.boolean :disliked

      t.timestamps
    end
  end
end
