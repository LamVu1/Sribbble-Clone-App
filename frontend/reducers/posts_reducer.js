import {RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST} from '../actions/posts_actions'
import merge from 'lodash/merge';

const postsReducer = (oldstate={}, action)=>{
    
    Object.freeze(oldstate);
    let nextState;
    switch(action.type){
        case RECEIVE_ALL_POSTS:
        return action.posts;
        case RECEIVE_POST:
        nextState = merge({}, oldstate, {[action.post.id]: action.post});
        return nextState;
        case REMOVE_POST:
            nextState = merge({}, oldstate);
            delete nextState[action.post.id];
            return nextState;
        default:
            return oldstate;    
    }
};

export default postsReducer;