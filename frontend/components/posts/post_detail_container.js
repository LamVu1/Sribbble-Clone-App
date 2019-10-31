import { connect } from 'react-redux';
import PostDetail from '../posts/post_detail';
import {deletePost} from '../../actions/posts_actions';
import {withRouter} from 'react-router-dom';
import {fetchFollows} from '../../actions/follows_action'

const mapStateToProps = (state, post)=>{
    return({
     Post: post,
     follows: Object.values(state.entities.follows)

    })
  }
  const mapDispatchToProps = dispatch => {
    
    return ({
      deletePost: (id)=>dispatch(deletePost(id)),
      fetchFollows: (author_id)=>dispatch(fetchFollows(author_id)),

    })
   
  };
  
  export default withRouter(connect(
  mapStateToProps,  mapDispatchToProps
  )(PostDetail));
  