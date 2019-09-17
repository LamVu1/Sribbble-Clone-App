json.extract! @post, :title, :description
json.photoURL url_for(@post.image)