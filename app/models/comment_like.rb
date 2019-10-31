class CommentLike < ApplicationRecord
    validates :user_id, :comment_id, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :comment,
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: :Comment
end
