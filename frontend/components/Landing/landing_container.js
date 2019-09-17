import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import {fetchPosts} from '../../actions/posts_actions'
import LandingPage from './landing';

const mapStateToProps = state=>{
  let posts = Object.values(state.entities.posts)
  return({
    posts: posts
  })
}
const mapDispatchToProps = dispatch => {
  
  return {
  fetchPosts: ()=>dispatch(fetchPosts())}
};

export default connect(
mapStateToProps,  mapDispatchToProps
)(LandingPage);
