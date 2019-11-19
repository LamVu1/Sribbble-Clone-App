    @comment_likes.each do |comment_like|
    json.set! comment_like.id do 
       json.id comment_like.id
       json.user_id comment_like.user_id
       json.username comment_like.user.username
       json.comment_id comment_like.comment_id
       json.create_at comment_like.created_at
       json.updated_at comment_like.updated_at
    end
end