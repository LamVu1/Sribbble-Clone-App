import { RECEIVE_PROFILE, CLEAR_PROFILE} from '../profile/profile_actions';
  
  
const profileReducer = (oldstate = {}, action) => {

  let emptyState = {};
  let nextState;
  Object.freeze(oldstate);
  switch(action.type) {
    case RECEIVE_PROFILE:
      // nextState = {...oldstate};
      // nextState[action.user.id] = action.user
      return action.user
    case CLEAR_PROFILE:
      return emptyState;
    default:
        nextState = {...oldstate};
      return nextState;
  }
  
};
  
  export default profileReducer;
  