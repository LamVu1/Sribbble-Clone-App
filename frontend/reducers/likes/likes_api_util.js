export const fetchLikes = (post_id)=>{
    return(
        $.ajax(
            {
                method: 'GET',
                url: `/api/likes`,
                data: {post_id}
            }
        )
    )
}

export const createLike = (post_id)=>{
    return(
        $.ajax(
        {
            method: 'POST',
            url: `/api/likes`,
            data: {post_id}
        })
    )
}

export const deleteLike = (id) => {
    return(
        $.ajax(
        {
            method: 'DELETE',
            url: `/api/likes/${id}`
        })
    )
}