class CommentLikeIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :comment_likes, :user_id
    remove_index :comment_likes, :comment_id
    add_index :comment_likes, [:user_id,:comment_id], unique: true
  end
end
