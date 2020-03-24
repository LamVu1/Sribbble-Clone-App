
import {
    RECEIVE_FOLLOW_ERRORS,
    CLEAR_ERRORS
  } from '../follows/follows_action';



  const followErrorsReducer = (state = [], action) => {
    
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_FOLLOW_ERRORS:
        return action.errors;
      case CLEAR_ERRORS:
        return [];
      default:
        return state;
    }
  };
  
  export default followErrorsReducer;