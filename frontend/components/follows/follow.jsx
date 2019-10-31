import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';

class FollowIndex extends React.Component{
    constructor(props) {
        super(props);
        this.handleFollow=this.handleFollow.bind(this);
        this.handleUnfollow=this.handleUnfollow.bind(this);
        }

    handleFollow(){
        this.props.createFollow(this.props.author_id)
    }

    handleUnfollow(){
        let id;
        id=this.props.follows.filter(follow=>follow.follower_id===this.props.currentuser_id)
        this.props.deleteFollow(id[0].id)
    }
      
    render(){
        return(
            <div>
               <h1>Follows</h1>
                <div>
                    {this.props.follows.filter(follow=>follow.follower_id===this.props.currentuser_id).length===0
                    
                    ?<button onClick={this.handleFollow}>Follow</button>
                    :<button onClick={this.handleUnfollow}>Unfollow</button>
            
                }
                </div>
            </div>
        )
    }
}

export default withRouter(FollowIndex);