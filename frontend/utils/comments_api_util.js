export const fetchComments = (id)=>{
    $.ajax({
        method: 'GET',
        url: `/api/posts/${id}/comments`
    })
}

export const createComment = (comment)=>{
    $.ajax({
        method: 'POST',
        url: `/api/posts/${id}/comments`
    })
}

export const deletePost = (comment) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/posts/${comment.post_id}/comments/${comment.id}`
    })
);