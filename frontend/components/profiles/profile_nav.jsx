import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import PostIndexItem from '../posts/post_index_item';
import FollowIndex from '../follows/follow_index_container';
import ProfileMessageContainer from './message'



class ProfileNav extends React.Component{
    constructor(props){
        super(props);
        this.state ={profile:[]};
        this.followings = [];
        this.followers = [];
        this.likes = [];
        this.shots = [];
    }

    componentDidMount(){
        this.props.getUser(this.props.author_id).then(profile=>

            {this.setState({profile: [...this.state.profile,profile.user]})});
    }
   
    render(){
        this.state.profile.map((profile,idx)=>{
            this.followings = profile.authors;
            this.followers = profile.followers;
            this.likes = profile.likes;
            this.shots = profile.posts
        })

                
        return(
            <div className="Profile-Lists">
                <div className="Profile-List-Div">
                    <Link to={`/profile/${this.props.author_id}`}>
                        Shots
                    </Link>
                    <p>{this.shots.length}</p>
                </div>
                <div className="Profile-List-Div">
                    <Link to={`/following/${this.props.author_id}`}>
                        Followers
                    </Link>
                    <p>{this.followings.length}</p>
                </div>
                <div className="Profile-List-Div">
                    <Link to={`/like/${this.props.author_id}`}>
                        Likes
                    </Link>
                    <p>{this.likes.length}</p>
                </div>

              
            </div> 
        )
    }
}

export default withRouter(ProfileNav);