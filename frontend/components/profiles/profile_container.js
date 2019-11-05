import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileIndex from './profile';
import {fetchPosts} from '../../actions/posts_actions';
import {closeModal, openModal} from '../../actions/modal_action';


const mapStateToProps=(state, ownProps)=>{
    
    return(
        {   follow: ownProps.location.state.user.follower_id,
            user: ownProps.location.state.user,
            author_id: ownProps.location.state.author_id,
            posts: Object.values(state.entities.posts)
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            fetchPosts: ()=>dispatch(fetchPosts()),
            openModal:(modal,data) => dispatch( openModal(modal, data)),
            closeModal: () => dispatch( closeModal())
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIndex)