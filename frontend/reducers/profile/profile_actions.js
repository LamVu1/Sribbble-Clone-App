import * as APIUtil from '../session/session_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';


export const receiveProfile = user => ({
    type: RECEIVE_PROFILE,
    user
  });
  
  export const clearProfile = () => ({
    type: CLEAR_PROFILE,
  });
  

  export const update = message => dispatch => (
    APIUtil.update(message).then(message => (
      dispatch(receiveProfile(message))
    ))
  );
  
  export const getUser = userId => dispatch => (
    APIUtil.getUser(userId).then(user => (
      dispatch(receiveProfile(user))
    ))
  );

  export const exitProfile = ()=>dispatch => (
      dispatch(clearProfile())
    )
