import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import postErrorsReducer from './post_errors_reducer';
import likeErrorsReducer from './likes_errors_reducer';
import followErrorsReducer from './follow_errors.reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    post: postErrorsReducer,
    like: likeErrorsReducer,
    follow: followErrorsReducer
})

export default errorsReducer;