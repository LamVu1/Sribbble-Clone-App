import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {closeModal} from '../../actions/modal_action';
import Modal from './modal';

const mapStateToProps=state=>{
    return({
        modal: state.ui.modal.modal,
        data: state.ui.modal.data
    })
}

const mapDispatchToProps=dispatch=>{
    return({
        closeModal: ()=>{dispatch(closeModal())}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)