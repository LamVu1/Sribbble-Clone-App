import {RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST} from '../actions/posts_actions'
import merge from 'lodash/merge';

const postsReducer = (oldstate={}, action)=>{
    
    let nextState;
    Object.freeze(oldstate);
    switch(action.type){
        case RECEIVE_ALL_POSTS:
        return action.posts;
        case RECEIVE_POST:
        nextState = Object.assign({}, oldstate, {[action.post.id]: action.post});
        return nextState;
        case REMOVE_POST:
            nextState = Object.assign({}, oldstate);
            delete nextState[action.post.id];
            return nextState;
        default:
            return oldstate;    
    }
};

export default postsReducer;