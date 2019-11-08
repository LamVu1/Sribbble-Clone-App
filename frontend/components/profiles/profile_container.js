import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileIndex from './profile';
import {fetchPosts, deletePost} from '../../actions/posts_actions';
import {closeModal, openModal} from '../../actions/modal_action';
import {getUser} from '../../actions/profile_actions';


const mapStateToProps=(state, ownProps)=>{
        
    return(
        {   

            // follow: ownProps.location.state.user.follower_id,
            currentUser: state.session.id,
            author_id: parseInt(ownProps.match.params.id),
            posts: Object.values(state.entities.posts),
            profile: Object.values(state.entities.profile)
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            fetchPosts: ()=>dispatch(fetchPosts()),
            openModal:(modal,data) => dispatch( openModal(modal, data)),
            closeModal: () => dispatch( closeModal()),
            getUser: (userId)=> dispatch( getUser(userId))
        }
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileIndex));