class DropCommentLikes < ActiveRecord::Migration[5.2]
  def change
    drop_table :commentlikes 
  end
end
