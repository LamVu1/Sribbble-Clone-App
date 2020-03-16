import * as APIUtil from './comment_likes_util';

export const RECEIVE_ALL_COMMENTLIKES = 'RECEIVE_ALL_COMMENTLIKES';
export const RECEIVE_COMMENTLIKE = 'RECEIVE_COMMENTLIKE';
export const REMOVE_COMMENTLIKE ='REMOVE_COMMENTLIKE';

const receiveCommentLikes = (commentLikes)=>({
    commentLikes: commentLikes,
    type: RECEIVE_ALL_COMMENTLIKES
})

const receiveCommentLike = (commentLike)=>({
    commentLike,
    type: RECEIVE_COMMENTLIKE
})

const removeCommentLike = (commentLike)=>({
    commentLike: commentLike,
    type: REMOVE_COMMENTLIKE
})



export const fetchcommentLikes = (commentLike)=>(dispatch)=>(
    APIUtil.fetchcommentLikes(commentLike).then( commentLike => dispatch(receiveCommentLikes(commentLike)))
)

export const createcommentLike = (commentLike)=>(dispatch)=>(         
    APIUtil.createcommentLike(commentLike).then(commentLike=> dispatch(receiveCommentLike(commentLike)))
    )

export const deletecommentLike = (commentLike)=> (dispatch)=>(
    APIUtil.deletecommentLike(commentLike).then( commentLike =>dispatch(removeCommentLike(commentLike)))
)