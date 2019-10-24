export const fetchComments = (Post_id)=>{
  return(  
      $.ajax(
        {
            method: 'GET',
            url: `/api/posts/${Post_id}/comments`
        })
    )
}

export const createComment = (comment)=>{
    return(
        $.ajax(
        {
            method: 'POST',
            url: `/api/posts/${comment.post_id}/comments`,
            data: {comment}
        })
    )
}

export const deleteComment = (comment) => {
    return(
        $.ajax(
        {
            method: 'DELETE',
            url: `/api/posts/${comment.post_id}/comments/${comment.id}`
        })
    )
}