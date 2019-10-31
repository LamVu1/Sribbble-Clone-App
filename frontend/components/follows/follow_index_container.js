import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FollowIndex from './follow';
import {fetchFollows, createFollow, deleteFollow} from '../../actions/follows_action';


const mapStateToProps=(state, ownProps)=>{

    
    return({
        currentuser_id : state.session.id,
        author_id   : ownProps.post.author_id,
        follows: ownProps.follows
    })
}

const mapDispatchToProps=dispatch=>{
    return({
        fetchFollows: (author_id) => dispatch(fetchFollows(author_id)),
        createFollow: (author_id) => dispatch(createFollow(author_id)),
        deleteFollow: (id) => dispatch(deleteFollow(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowIndex)