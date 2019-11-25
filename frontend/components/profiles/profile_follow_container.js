import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FollowingProfileIndex from './profile_follow';
import {getUser, exitProfile} from '../../actions/profile_actions';
import {fetchFollows} from '../../actions/follows_action';


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
            fetchFollows: (author_id)=>dispatch(fetchFollows(author_id))

        }
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowingProfileIndex));