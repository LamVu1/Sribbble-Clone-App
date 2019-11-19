import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './likes_reducer';
import followsReducer from './follows_reducer';
import profileReducer from './profile_reducer';
import commentlikesReducer from './comment_likes_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    likes: likesReducer,
    comments: commentsReducer,
    commentlikes: commentlikesReducer,
    follows: followsReducer,
    profile: profileReducer
  });
  
  export default entitiesReducer;