import * as APIUtil from './comments_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT ='REMOVE_COMMENT';

const receiveComments = (comments)=>({
    comments: comments,
    type: RECEIVE_ALL_COMMENTS
});

const receiveComment = (comment)=>({
    comment,
    type: RECEIVE_COMMENT
});


const removeComment = (comment)=>({
    comment: comment,
    type: REMOVE_COMMENT
})

export const fetchComments = (Post_id)=>(dispatch)=>(
    APIUtil.fetchComments(Post_id).then( comments => dispatch(receiveComments(comments)))
)

export const createComment = (comment)=>(dispatch)=>(         
    APIUtil.createComment(comment).then(comment=> dispatch(receiveComment(comment)))
    )

export const deleteComment = (comment)=> (dispatch)=>(
    APIUtil.deleteComment(comment).then( comment =>dispatch(removeComment(comment)))
)