class Commentlikes < ActiveRecord::Migration[5.2]
  def change
    create_table :commentlikes do |t|
      t.integer 'user_id', null: false
      t.integer 'comment_id', null: false
      t.timestamps
    end
    add_index :commentlikes, :user_id, unique: true
    add_index :commentlikes, :comment_id, unique: true
  end
end
