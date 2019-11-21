json.id @comment.id
json.body @comment.body
json.user_id @comment.user_id
json.author @comment.user.username
if @comment.user.profile_picture.attached?
        json.profile_picture url_for(@comment.user.profile_picture)
else
    json.profile_picture 'profile.png'
end
json.post_id @comment.post_id
json.create_at @comment.created_at
json.updated_at @comment.updated_at
