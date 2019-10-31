import * as APIUtil from '../utils/follows_api_util';

export const RECEIVE_ALL_FOLLOWS= 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW ='REMOVE_FOLLOW';

const receiveFollows = (follows)=>({
    follows: follows,
    type: RECEIVE_ALL_FOLLOWS
});

const receiveFollow = (follow)=>({
    follow,
    type: RECEIVE_FOLLOW
});


const removeFollow = (follow)=>({
    follow: follow,
    type: REMOVE_FOLLOW
})

export const fetchFollows = (author_id)=>(dispatch)=>(
    APIUtil.fetchFollows(author_id).then( follows => dispatch(receiveFollows(follows)))
)

export const createFollow = (author_id)=>(dispatch)=>(         
    APIUtil.createFollow(author_id).then(follow=> dispatch(receiveFollow(follow)))
    )

export const deleteFollow = (follow)=> (dispatch)=>(
    APIUtil.deleteFollow(follow).then( follow =>dispatch(removeFollow(follow)))
)