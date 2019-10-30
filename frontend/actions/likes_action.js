import * as APIUtil from '../utils/likes_api_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE ='REMOVE_LIKE';

const receiveLikes = (likes)=>({
    likes: likes,
    type: RECEIVE_ALL_LIKES
})

const receiveLike = (like)=>({
    like,
    type: RECEIVE_LIKE
})

const removeLike =(like)=>({
    like: like,
    type: REMOVE_LIKE
})

export const fetchLikes = (Post_id)=>(dispatch)=>(
    APIUtil.fetchLikes(Post_id).then( likes => dispatch(receiveLikes(likes)))
)

export const createLike = (like)=>(dispatch)=>(         
    APIUtil.createLike(like).then(like=> dispatch(receiveLike(like)))
    )

export const deleteLike = (like)=> (dispatch)=>(
    APIUtil.deleteLike(like).then( like =>dispatch(removeLike(like)))
)