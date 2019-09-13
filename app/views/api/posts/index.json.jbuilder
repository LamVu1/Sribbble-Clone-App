json.array! @posts do |post|
    json.extract! post, :id, :title, :description, :author_id
    json.photoURL url_for(post.image)
end