import * as APIUtil from './follows_api_util';

export const RECEIVE_ALL_FOLLOWS= 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW ='REMOVE_FOLLOW';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

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

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const clearErrors = ()=>({
    type: CLEAR_ERRORS
})



export const fetchFollows = (author_id)=>(dispatch)=>(
    APIUtil.fetchFollows(author_id).then( follows => dispatch(receiveFollows(follows)))
)

export const createFollow = (author_id)=>(dispatch)=>(         
    APIUtil.createFollow(author_id).then(follow=> {dispatch(receiveFollow(follow))}
        ,err=>{
        dispatch(receiveErrors(err.responseJSON))
    })
    )

export const deleteFollow = (id)=> (dispatch)=>(
    APIUtil.deleteFollow(id).then( follow =>dispatch(removeFollow(follow)))
)