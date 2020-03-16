import { connect } from 'react-redux';
import { logout } from '../../reducers/session/session_actions';
import {exitProfile, getUser} from '../../reducers/profile/profile_actions';
import Nav from './main_nav';

const mapStateToProps = state => {
  
  return(
      {
        currentUser: Object.values(state.entities.users)[0],
        session: state.session.id
      }
  )
};


const mapDispatchToProps = dispatch => {

  return(
      {
          logout: () => dispatch(logout()),
          exitProfile: ()=>dispatch(exitProfile()),
      }
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
