class AddColumnToCommentLike < ActiveRecord::Migration[5.2]
  def change
    add_column :comment_likes, :post_id, :integer
  end
end
