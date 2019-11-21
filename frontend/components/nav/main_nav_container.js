import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
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
          logout: () => dispatch(logout())
      }
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
