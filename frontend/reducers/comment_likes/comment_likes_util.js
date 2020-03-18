export const fetchcommentLikes = (PostId)=>{
    
    return(  
        $.ajax(
          {
              method: 'GET',
              url: `/api/posts/${PostId}/comments/1/commentlikes`
          })
      )
  }
  
  export const createcommentLike = (commentLike)=>{
      return(
          $.ajax(
          {
              method: 'POST',
              url: `/api/posts/${commentLike.post_id}/comments/${commentLike.comment_id}/commentlikes`,
              data: {commentLike}
          })
      )
  }
  
  export const deletecommentLike = (commentLike) => {
      return(
          $.ajax(
          {
              method: 'DELETE',
              url: `/api/posts/${commentLike.post_id}/comments/${commentLike.comment_id}/commentlikes/${commentLike.id}`
          })
      )
  }