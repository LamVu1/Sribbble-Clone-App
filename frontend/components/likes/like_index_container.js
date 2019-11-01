import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LikeIndex from './like_index';
import {createLike, deleteLike} from '../../actions/likes_action';


const mapStateToProps=(state, ownProps)=>{
  
    return(
        {
            currentUser: state.session.id,
            likes: ownProps.Likes,
            PostId: ownProps.PostId
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            createLike: (post_id) => dispatch( createLike(post_id)),
            deleteLike: (id) => dispatch( deleteLike(id))
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeIndex)