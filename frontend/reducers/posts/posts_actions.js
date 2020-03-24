import * as APIUtil from './posts_api_utils';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'; 
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST ='REMOVE_POST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receivePosts = (posts) => ({
    posts: posts,
    type: RECEIVE_ALL_POSTS
});

const receivepost = (post) => ({
    post: post,
    type: RECEIVE_POST
});

const removepost = (post)=>({
    post: post,
    type: REMOVE_POST
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const clearErrors = ()=>({
    type: CLEAR_ERRORS
})



export const fetchPosts = ()=>(dispatch)=>(
    APIUtil.fetchPosts().then( posts => dispatch(receivePosts(posts)))
)

export const fetchPost = (posts)=>(dispatch)=>(
    APIUtil.fetchPost(posts).then( posts => dispatch(receivePosts(posts)))
)

export const createPost = (post)=>(dispatch)=>{
return(
    APIUtil.createPost(post).then( post => {
        dispatch(receivepost(post))
    }, err=>{
        
        dispatch(receiveErrors(err.responseJSON))
    })
)
}


export const updatePost =(post)=>(dispatch)=>(
    APIUtil.updatePost(post).then( post => dispatch(receivepost(post)))
)

export const deletePost = (id)=>(dispatch)=>(
    APIUtil.deletePost(id).then( post => dispatch(removepost(post)))
)