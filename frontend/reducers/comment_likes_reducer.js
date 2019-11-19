import {RECEIVE_ALL_COMMENTLIKES, RECEIVE_COMMENTLIKE, REMOVE_COMMENTLIKE} from '../actions/comment_likes_actions';

import merge from 'lodash/merge';

const commentlikesReducer = (oldstate={}, action)=>{
    
    let nextState;
    Object.freeze(oldstate);
    switch(action.type){
        case RECEIVE_ALL_COMMENTLIKES:
            
            return action.commentLikes;
        case RECEIVE_COMMENTLIKE:
            debugger
            nextState = {...oldstate};
            nextState[action.commentLike.id] = action.commentLike
            return nextState;
        case REMOVE_COMMENTLIKE:
            nextState = Object.assign({}, oldstate)
            delete nextState[action.commentLike.id]
            return nextState;
        default:
            return oldstate;
    }
};

export default commentlikesReducer;