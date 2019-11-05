import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FollowIndex from './follow';
import {fetchPosts} from '../../actions/posts_actions';
import {createFollow, deleteFollow} from '../../actions/follows_action';


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
            fetchPosts: ()=>dispatch(fetchPosts()),

        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowIndex)