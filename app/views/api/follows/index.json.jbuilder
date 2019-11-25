@follows.each do |follow|
    json.set! follow.id do 
        json.id follow.id
        json.user_id follow.user_id
        json.follower_id follow.follower_id
        json.follower_username follow.follower.username
        json.author_username follow.author.username
        json.create_at follow.created_at
        json.updated_at follow.updated_at
        if follow.follower.profile_picture.attached?
            json.follower_profilepicture url_for(follow.follower.profile_picture)
        else
            json.follower_profilepicture 'profile.png'
        end
    end
end