class Post < ApplicationRecord
    validates :title, :description, :author_id, presence: true

    has_one_attached :image

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

    has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment

end
