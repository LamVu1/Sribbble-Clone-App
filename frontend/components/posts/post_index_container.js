import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {closeModal, openModal} from '../../actions/modal_action';
import PostIndex from './post_index';
import {fetchPosts} from '../../actions/posts_actions';

const mapStateToProps=state=>{

    
    return({
        posts: Object.values(state.entities.posts)
    })
}

const mapDispatchToProps=dispatch=>{
    return({
      openModal:(modal,data)=>dispatch(openModal(modal, data)),
      fetchPosts: ()=>dispatch(fetchPosts()),
      closeModal: ()=>dispatch(closeModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)