@post.each do |post|
    json.set! post.id do 
       json.id post.id
       json.title post.title
       json.description post.description
       json.author_id post.author_id
       json.author post.author.username
       json.location post.author.location
       json.follower_id post.author.followers
       json.likes post.likes
       json.commentlike post.commentlikes
       if post.image.attached?
          json.imageURL url_for(post.image)
       end
       if post.author.profile_picture.attached?
         json.profile_picture url_for(post.author.profile_picture)
      else
         json.profile_picture 'profile.png'
      end
   end
end