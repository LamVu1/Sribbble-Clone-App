import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentIndex from './comment_index';
import {fetchComments, createComment, deleteComment} from '../../actions/comment_actions';


const mapStateToProps=(state, ownProps)=>{

    return(
        {
             comments: Object.values(state.entities.comments),
             currentUser: ownProps.currentUser,
             commentLikes: Object.values(state.entities.commentlikes),
             commentlike: ownProps.commentlike
        }
    )
}

const mapDispatchToProps=dispatch=>{
   
    return(
        {
            fetchComments: (Post_id) => dispatch( fetchComments(Post_id)),
            createComment: (comment) => dispatch( createComment(comment)),
            deleteComment: (comment) => dispatch( deleteComment(comment)),

        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)