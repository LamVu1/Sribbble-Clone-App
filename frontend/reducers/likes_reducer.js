import {RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE} from '../actions/likes_action';

import merge from 'lodash/merge';

const likesReducer = (oldstate={}, action)=>{
    
    let nextState;
    Object.freeze(oldstate);
    switch(action.type){
        case RECEIVE_ALL_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            nextState = {...oldstate};
            nextState[action.like.id] = action.like
            return nextState;
        case REMOVE_LIKE:
            nextState = Object.assign({}, oldstate)
            delete nextState[action.like.id]
            return nextState;
        default:
            return oldstate;
    }
};

export default likesReducer;