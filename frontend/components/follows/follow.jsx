import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';

class FollowIndex extends React.Component{
    constructor(props){
        super(props);
     
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
        
    }

    componentDidMount(){
        this.props.fetchPosts()
    }

    handleFollow(){
        this.props.createFollow(this.props.author_id)
    }

    handleUnfollow(){
        let id=this.props.follows.filter(follow => follow.follower_id === this.props.currentuser_id)
        this.props.deleteFollow(id[0].id)
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

export default withRouter(FollowIndex);