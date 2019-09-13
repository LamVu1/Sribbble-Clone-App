class Post < ApplicationRecord
    validates :title, :description, :author_id, presence: true

    has_one_attached :image

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User


end
