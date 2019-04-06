class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :video, foreign_key: true
      t.string :title
      t.text :body
      t.boolean :like
      t.boolean :dislike

      t.timestamps
    end
  end
end
