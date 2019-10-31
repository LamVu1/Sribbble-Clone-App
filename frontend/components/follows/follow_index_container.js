import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FollowIndex from './follow';
import {fetchFollows, createFollow, deleteFollow} from '../../actions/follows_action';


const mapStateToProps=(state, ownProps)=>{

    
    return({
        author_id   : ownProps.post.author_id,
        follows: Object.values(state.entities.follows)
    })
}

const mapDispatchToProps=dispatch=>{
    return({
        fetchFollows: (author_id) => dispatch(fetchFollows(author_id)),
        createFollow: (author_id) => dispatch(createFollow(author_id)),
        deleteFollow: (follow) => dispatch(deleteFollow(follow))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowIndex)