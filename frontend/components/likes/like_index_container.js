import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LikeIndex from './like_index';
import {fetchLikes, createLike, deleteLike} from '../../actions/likes_action';


const mapStateToProps=(state, ownProps)=>{

    
    return({
        currentUser: state.session.id,
        likes: Object.values(state.entities.likes)
    })
}

const mapDispatchToProps=dispatch=>{
    return({
      fetchLikes: (Post_id) => dispatch(fetchLikes(Post_id)),
      createLike: (like) => dispatch(createLike(like)),
      deleteLike: (like) => dispatch(deleteLike(like))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeIndex)