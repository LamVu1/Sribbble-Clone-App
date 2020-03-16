import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FollowIndex from './follow';
import {fetchPosts} from '../../reducers/posts/posts_actions';
import {createFollow, deleteFollow, fetchFollows} from '../../reducers/follows/follows_action';


const mapStateToProps=(state, ownProps)=>{
    
    let author_id;
    if(ownProps.post){
        author_id=ownProps.post.author_id
    }else{
        author_id=ownProps.author_id
    }

    return(
        {
            currentuser_id: state.session.id,
            author_id: author_id,
            follows: ownProps.follows
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            createFollow: (author_id) => dispatch( createFollow(author_id)),
            deleteFollow: (id) => dispatch( deleteFollow(id)),
            fetchFollows: (author_id)=>dispatch(fetchFollows(author_id))

        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowIndex)