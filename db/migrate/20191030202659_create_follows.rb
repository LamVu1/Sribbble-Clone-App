class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :user_id, presence:true
      t.integer :follower_id, presence: true
      t.timestamps
    end
    add_index :follows, :user_id, unique: true
    add_index :follows, :follower_id, unique: true
  end
end
