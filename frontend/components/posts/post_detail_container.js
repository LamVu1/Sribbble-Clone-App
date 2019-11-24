import { connect } from 'react-redux';
import PostDetail from '../posts/post_detail';
import {deletePost} from '../../actions/posts_actions';
import {withRouter} from 'react-router-dom';
import {fetchFollows} from '../../actions/follows_action';
import {fetchLikes} from '../../actions/likes_action';
import {closeModal} from '../../actions/modal_action';
import {updatePost} from '../../actions/posts_actions';


const mapStateToProps = (state, post)=>{

    return(
      {
          Post: post,
          follows: Object.values(state.entities.follows),
          likes: Object.values(state.entities.likes),
          user_id: state.session.id
      }
    )
};

const mapDispatchToProps = dispatch => {
  
    return(
      {
          deletePost: (id)=>dispatch(deletePost(id)),
          closeModal: () => dispatch( closeModal()),
          updatePost: (post)=>dispatch(updatePost(post))

      }
    )
};
  
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
  