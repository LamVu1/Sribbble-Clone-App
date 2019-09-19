import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {closeMODAL} from '../../actions/modal_action';
import Modal from './modal';

const mapStateToProps=state=>{
    return({
        modal: state.ui.modal
    })
}

const mapDispatchToProps=dispatch=>{
    return({
        closeMODAL: ()=>{dispatch(closeMODAL())}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)