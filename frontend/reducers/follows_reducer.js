import {RECEIVE_ALL_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW} from '../actions/follows_action';

import merge from 'lodash/merge';

const followsReducer = (oldstate={}, action)=>{
    
    let nextState;
    Object.freeze(oldstate);
    switch(action.type){
        case RECEIVE_ALL_FOLLOWS:
            return action.follows;
        case RECEIVE_FOLLOW:
            nextState = {...oldstate};
            nextState[action.follow.id] = action.follow
            return nextState;
        case REMOVE_FOLLOW:
            nextState = Object.assign({}, oldstate)
            delete nextState[action.follow.id]
            return nextState;
        default:
            return oldstate;
    }
};

export default followsReducer;