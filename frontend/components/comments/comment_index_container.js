import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentIndex from './comment_index';
import {fetchComments, createComment, deleteComment} from '../../reducers/comments/comment_actions';
import {fetchcommentLikes} from '../../reducers/comment_likes/comment_likes_actions';
import {closeModal} from '../../reducers/ui/modal_action';

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
            fetchcommentLikes: (commentlike) => dispatch( fetchcommentLikes(commentlike)),
            createComment: (comment) => dispatch( createComment(comment)),
            deleteComment: (comment) => dispatch( deleteComment(comment)),
            closeModal: () => dispatch( closeModal())

        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)