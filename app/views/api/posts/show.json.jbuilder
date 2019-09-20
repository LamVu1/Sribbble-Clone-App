json.extract! @post, :id, :title, :description, :author_id
if @post.image.attached?
    json.imageURL url_for(@post.image)
end
