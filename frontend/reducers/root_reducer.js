import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session/session_reducer';
import errors from './errors/errors_reducer'; 
import ui from './ui/ui_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    ui,
    errors
  });
  
  export default rootReducer;
  