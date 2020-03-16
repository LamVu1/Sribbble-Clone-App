import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileNav from './profile_nav';
import {getUser, exitProfile} from '../../reducers/profile/profile_actions';


const mapStateToProps=(state, ownProps)=>{
        
    return(
        {  
            author_id: ownProps.author_id
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {    
            getUser: (userId)=> dispatch( getUser(userId))
           
        }
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileNav));