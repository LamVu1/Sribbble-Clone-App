json.extract! user, :id, :username, :message, :location
if user.profile_picture.attached?
    json.imageURL url_for(user.profile_picture)
else
    json.imageURL 'profile.png'
end
json.followers user.follows
json.authors user.authors
json.likes user.likes
json.posts user.posts