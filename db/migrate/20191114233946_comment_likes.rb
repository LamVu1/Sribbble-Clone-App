class CommentLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :comment_likes do |t|
      t.integer 'user_id', null: false
      t.integer 'comment_id', null: false
      t.timestamps
    end
    add_index :comment_likes, :user_id, unique: true
    add_index :comment_likes, :comment_id, unique: true
  end
end
