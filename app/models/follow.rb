class Follow < ApplicationRecord
    validates :user_id, :follower_id, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User
end