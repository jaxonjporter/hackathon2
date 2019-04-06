class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :title
      t.integer :video_id
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
