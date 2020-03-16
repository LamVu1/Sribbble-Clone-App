import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileLikeIndex from './profile_like';
import {getUser, exitProfile} from '../../reducers/profile/profile_actions';
import {fetchLikes} from '../../reducers/likes/likes_action';
import {fetchPost} from '../../reducers/posts/posts_actions';
import {closeModal, openModal} from '../../reducers/ui/modal_action';


const mapStateToProps=(state, ownProps)=>{
        
    return(
        {   
            author_id: parseInt(ownProps.match.params.id),

        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            getUser: (userId)=> dispatch( getUser(userId)),
            exitProfile: ()=>dispatch(exitProfile()),
            fetchLikes: (post_id) => dispatch(fetchLikes(post_id)),
            fetchPost: (post) => dispatch( fetchPost(post)),
            openModal:(modal,data) => dispatch( openModal(modal, data)),
            closeModal: () => dispatch( closeModal())

        }
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileLikeIndex));