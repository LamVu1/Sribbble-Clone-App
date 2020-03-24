
import {
    RECEIVE_LIKE_ERRORS,
    CLEAR_ERRORS
  } from '../likes/likes_action';



  const likeErrorsReducer = (state = [], action) => {
    
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_LIKE_ERRORS:
        return action.errors;
      case CLEAR_ERRORS:
        return [];
      default:
        return state;
    }
  };
  
  export default likeErrorsReducer;