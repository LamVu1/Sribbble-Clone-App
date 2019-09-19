import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {closeMODAL} from '../../actions/modal_action';
import PostIndex from './post_index';

const mapStateToProps=state=>{
    return({
        posts: state.entities.posts,
    })
}

const mapDispatchToProps=dispatch=>{
    return({
        openModal: (modal)=>dispatch(openModal(modal))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)