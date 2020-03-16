import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FollowingProfileIndex from './profile_follow';
import {getUser, exitProfile} from '../../reducers/profile/profile_actions';
import {fetchFollows} from '../../reducers/follows/follows_action';


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