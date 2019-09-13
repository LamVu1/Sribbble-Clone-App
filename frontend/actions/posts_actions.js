import * as APIUtil from '../utils/posts_api_utils';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'; 
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST ='REMOVE_POST';

const receiveposts = (posts) => ({
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

export const fetchPosts = ()=>(dispatch)=>(
    APIUtil.fetchPosts().then( posts => dispatch(receiveposts(posts)))
)

export const fetchPost = (id)=>(dispatch)=>(
    APIUtil.fetchPost(id).then( post => dispatch(receivepost(post)))
)

export const createPost = (post)=>(dispatch)=>(
    APIUtil.createPost(post).then(post => dispatch(receivepost(post)))
)

export const updatePost =(post)=>(dispatch)=>(
    APIUtil.updatePost(post).then( post => dispatch(receivepost(post)))
)

export const deletePost = (id)=>(dispatch)=>(
    APIUtil.deletePost(id).then( post => dispatch(removepost(post)))
)