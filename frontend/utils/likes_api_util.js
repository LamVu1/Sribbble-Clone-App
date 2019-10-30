export const fetchLikes = (Post_id)=>{
    return(
        $.ajax(
            {
                method: 'GET',
                url: `/api/posts/${Post_id}/likes`
            }
        )
    )
}

export const createLike = (like)=>{
    return(
        $.ajax(
        {
            method: 'POST',
            url: `/api/posts/${like.post_id}/likes`,
            data: {like}
        })
    )
}

export const deleteLike = (like) => {
    return(
        $.ajax(
        {
            method: 'DELETE',
            url: `/api/posts/${like.post_id}/likes/${like.id}`
        })
    )
}