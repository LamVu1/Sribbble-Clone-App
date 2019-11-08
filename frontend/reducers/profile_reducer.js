import { RECEIVE_PROFILE, CLEAR_PROFILE} from '../actions/profile_actions';
  
  
const profileReducer = (oldstate = {}, action) => {

  let nextState;
  Object.freeze(oldstate);
  switch(action.type) {
    case RECEIVE_PROFILE:
      nextState = {...oldstate};
      nextState[action.user.id] = action.user
      return nextState;
    case CLEAR_PROFILE:
      return oldstate;
    default:
      return oldstate;
  }
  
};
  
  export default profileReducer;
  