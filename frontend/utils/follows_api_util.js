export const fetchFollows = (author_id)=>{
    return(
        $.ajax(
            {
                method: 'GET',
                url: `/api/follows`,
                data: {author_id}
            }
        )
    )
}

export const createFollow = (author_id)=>{
    return(
        $.ajax(
            {
                method: 'POST',
                url: `/api/follows`,
                data: {author_id}
            }
        )
    )
}

export const deleteFollow = (follow)=>{
    return(
        $.ajax(
            {
                method: 'DELETE',
                url: `/api/follows/${follow.id}`
            }
        )
    )
}