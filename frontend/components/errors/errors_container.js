import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorsIndex from './errors';
import {clearErrors } from '../../reducers/session/session_actions';



const mapStateToProps=(state, ownProps)=>{
  
    return(
        {
           errors: ownProps.errors
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            clearErrors: ()=>dispatch(clearErrors())
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsIndex)