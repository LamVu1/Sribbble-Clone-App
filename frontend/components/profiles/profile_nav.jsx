import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import PostIndexItem from '../posts/post_index_item';
import FollowIndex from '../follows/follow_index_container';
import ProfileMessageContainer from './message'



class ProfileNav extends React.Component{
    constructor(props){
        super(props);
    }
   
    render(){

                
        return(
            <div className="Profile-Lists">
                <p>
                    <Link to={`/profile/${this.props.author_id}`}>
                        Shots
                    </Link>
                </p>
                <p>
                    <Link to={`/following/${this.props.author_id}`}>
                        Followers
                    </Link>
                </p>
                <p>
                    <Link to={`/like/${this.props.author_id}`}>
                        Likes
                    </Link>
                </p>

              
            </div> 
        )
    }
}

export default withRouter(ProfileNav);