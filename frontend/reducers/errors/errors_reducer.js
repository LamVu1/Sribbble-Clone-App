// import { combineReducers } from 'redux';
// import sessionErrorsReducer from './session_errors_reducer';
// // import postErrorsReducer from './post_errors_reducer';
// // import likeErrorsReducer from './likes_errors_reducer';
// // import followErrorsReducer from './follow_errors.reducer';

// const errorsReducer = combineReducers({
//     session: sessionErrorsReducer})

// export default errorsReducer;


import {
    RECEIVE_ERRORS,
      CLEAR_ERRORS
    } from './errors_action';
  
  
  
    const ErrorsReducer = (state = [], action) => {
      
      Object.freeze(state);
      switch(action.type) {
        case RECEIVE_ERRORS:
          return action.errors;
        case CLEAR_ERRORS:
          return [];
        default:
          return state;
      }
    };
    
    export default ErrorsReducer;