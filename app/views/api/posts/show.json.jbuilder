json.extract! @post, :id, :title, :description, :author_id, :created_at, :view, :updated_at
if @post.image.attached?
    json.imageURL url_for(@post.image)
end
