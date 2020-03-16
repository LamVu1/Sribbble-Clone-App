import {RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from './comment_actions';

import merge from 'lodash/merge';

const commentsReducer = (oldstate={}, action)=>{
    
    let nextState;
    Object.freeze(oldstate);
    switch(action.type){
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            nextState = {...oldstate};
            
            nextState[action.comment.id] = action.comment
            // nextState = Object.assign({}, oldstate, {[action.comment.id]: action.comment})
            return nextState;
        case REMOVE_COMMENT:
            nextState = Object.assign({}, oldstate)
            delete nextState[action.comment.id]
            return nextState;
        default:
            return oldstate;
    }
};

export default commentsReducer;