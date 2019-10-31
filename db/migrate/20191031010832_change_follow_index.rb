class ChangeFollowIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :follows, :user_id
    remove_index :follows, :follower_id
    add_index :follows, [:user_id, :follower_id], unique: true

  end
end
