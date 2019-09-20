import { connect } from 'react-redux';
import PostDetail from '../posts/post_detail';
import {deletePost} from '../../actions/posts_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, post)=>{
    return({
     Post: post
    })
  }
  const mapDispatchToProps = dispatch => {
    
    return ({
      deletePost: (id)=>dispatch(deletePost(id))
    })
   
  };
  
  export default withRouter(connect(
  mapStateToProps,  mapDispatchToProps
  )(PostDetail));
  