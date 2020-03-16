import * as APIUtil from './likes_api_util';

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

const removeLike = (like)=>({
    like: like,
    type: REMOVE_LIKE
})



export const fetchLikes = (post_id)=>(dispatch)=>(
    APIUtil.fetchLikes(post_id).then( likes => dispatch(receiveLikes(likes)))
)

export const createLike = (post_id)=>(dispatch)=>(         
    APIUtil.createLike(post_id).then(like=> dispatch(receiveLike(like)))
    )

export const deleteLike = (id)=> (dispatch)=>(
    APIUtil.deleteLike(id).then( like =>dispatch(removeLike(like)))
)