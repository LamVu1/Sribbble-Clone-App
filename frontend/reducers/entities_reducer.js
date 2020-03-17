import { combineReducers } from 'redux';

import usersReducer from './user/users_reducer';
import postsReducer from './posts/posts_reducer';
import commentsReducer from './comments/comments_reducer';
import likesReducer from './likes/likes_reducer';
// import followsReducer from './follows_reducer';
// import profileReducer from './profile_reducer';
import commentlikesReducer from './comment_likes/comment_likes_reducer';
// likes: likesReducer,
// comments: commentsReducer,
// commentlikes: commentlikesReducer,
// follows: followsReducer,
// profile: profileReducer

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    likes: likesReducer,
    comments: commentsReducer,
    comment_likes: commentlikesReducer
  });
  
  export default entitiesReducer;