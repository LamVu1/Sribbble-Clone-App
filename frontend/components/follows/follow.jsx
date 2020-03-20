import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';


import { connect } from 'react-redux';

import {createFollow, deleteFollow, fetchFollows} from '../../reducers/follows/follows_action';
import {getUser} from '../../reducers/profile/profile_actions';


class Follow extends React.Component{
    constructor(props){
        super(props);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
    }


    componentDidMount(){
        this.props.fetchFollows(this.props.AuthorId)
    }

    handleFollow(){
        this.props.createFollow(this.props.AuthorId);
        if(Object.keys(this.props.profile).length!==0){
            this.props.getUser(this.props.profile.id)
        }
    }

    handleUnfollow(){
        let id=this.props.follows.filter(follow => follow.follower_id === this.props.currentuser_id)
        this.props.deleteFollow(id[0].id);
        if(Object.keys(this.props.profile).length!==0){
            this.props.getUser(this.props.profile.id)

        }
    }
      
    render(){
        
        return(
            <div>
                {
                    this.props.follows.filter(follow=>follow.follower_id===this.props.currentuser_id).length===0
                
                    ?<button className="Follow-btn" onClick={this.handleFollow}>Follow</button>
                    :<button className="Unfollow-btn" onClick={this.handleUnfollow}>Following</button>
            
                }
            </div>
        )
    }
}





const mapStateToProps=(state, ownProps)=>{
    
    return(
       { 
        follows: Object.values(state.entities.follows),
        currentuser_id: state.session.id,
        profile: state.entities.profile
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            createFollow: (author_id) => dispatch( createFollow(author_id)),
            deleteFollow: (id) => dispatch( deleteFollow(id)),
            fetchFollows: (author_id)=>dispatch(fetchFollows(author_id)),
            getUser: (userId)=> dispatch(getUser(userId))

        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Follow);