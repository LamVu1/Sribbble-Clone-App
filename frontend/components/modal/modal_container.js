import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {CLOSE_MODAL} from '../../actions/modal_action';
import Modal from './modal';

const mapStateToProps=state=>{
    return({
        modal: 
    })
}

const mapDispatchToProps=dispatch=>{
    return({
        closeModal: ()=>{dispatch(closeMODAL())}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)