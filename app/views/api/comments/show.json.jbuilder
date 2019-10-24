json.comment.id do
    json.id @comment.id
    json.body @comment.body
    json.user_id @comment.user_id
    json.author @comment.user.username
    json.post_id @comment.post_id
end