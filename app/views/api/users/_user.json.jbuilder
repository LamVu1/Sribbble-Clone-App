json.extract! user, :id, :username, :message, :location
if user.profile_picture.attached?
    json.imageURL url_for(user.profile_picture)
else
    json.imageURL 'profile.png'
end
json.followers user.follows
json.authors user.authors
json.likes user.likes
json.posts user.posts.each do |post|
       json.id post.id
       json.title post.title
       json.description post.description
       json.author_id post.author_id
       json.author post.author.username
       json.location post.author.location
       json.view post.view
       json.created_at post.created_at
       json.updated_at post.updated_at
       if post.image.attached?
          json.imageURL url_for(post.image)
       end
       if post.author.profile_picture.attached?
         json.profile_picture url_for(post.author.profile_picture)
      else
         json.profile_picture 'profile.png'
      end
end