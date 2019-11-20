import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentLikeIndex from './comment_likes_index';
import {fetchcommentLikes, createcommentLike, deletecommentLike} from '../../actions/comment_likes_actions';


const mapStateToProps=(state, ownProps)=>{
  
    return(
        {
            post_id: ownProps.post_id,
            comment_id: ownProps.comment_id,
            currentuser_id: state.session.id,
            likes: ownProps.commentlike
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            fetchcommentLikes: (commentlike) => dispatch( fetchcommentLikes(commentlike)),
            createcommentLike: (commentlike) => dispatch( createcommentLike(commentlike)),
            deletecommentLike: (commentlike) => dispatch( deletecommentLike(commentlike))
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentLikeIndex)