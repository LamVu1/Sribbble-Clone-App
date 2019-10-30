@likes.each do |like|
    json.set! like.id do 
       json.id like.id
       json.user_id like.user_id
       json.username like.user.username
       json.post_id like.post_id
       json.create_at like.created_at
       json.updated_at like.updated_at
    end
end