@post.each do |post|
    json.set! post.id do 
       json.id post.id
       json.title post.title
       json.description post.description
       json.author_id post.author_id
       json.author post.author.username
       if post.image.attached?
          json.imageURL url_for(post.image)
       end
    end
end