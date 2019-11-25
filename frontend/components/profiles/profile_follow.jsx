import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import ProfileNavContainer from './profile_nav_container';




class FollowingProfileIndex extends React.Component{
    constructor(props){
        super(props);
        this.state ={following:[], profile:[]};
        this.pic = '';
    }

    componentDidMount(){    
        this.props.fetchFollows(this.props.author_id).then(following=>{
            
                {this.setState({following: [...this.state.following,...Object.values(following.follows)
                ]})}
            }
        );
        this.props.getUser(this.props.author_id).then(profile=>
            {this.setState({profile: [...this.state.profile,profile.user]})});
    }

   
    render(){
        let name;
        this.state.profile.map((profile,idx)=>{
            name=<h1 key={idx}>{profile.username}</h1>
            this.pic = profile.imageURL;
        })
        
        let follows = Object.values(this.state.following).map((follow,idx)=>{
            console.log(follow)
            return(
            <li className="Follower-Item"key={idx}>
                
                <Link to={`/profile/${follow.follower_id}`}>
                    <img className="Profile-Picture" src={follow.follower_profilepicture} alt=""/>
                    <p className="Follower-Name">{follow.follower_username} </p>
                </Link>
                        
            </li>
            )   
        })
                
        return(
            <div className="Profile-Follower-Container">
              <ProfileNavContainer 
                author_id = {this.props.author_id}
              />
            <div className="Author-Header-Container">
                <div className="Author-Header">
                <Link to={`/profile/${this.props.author_id}`}>
                     <img className="Profile-Picture" src={this.pic} alt=""/> {name} 
                </Link>
                     <span>|</span>Followers 
                </div>
            </div>
              <p className="Follower-Count">{follows.length} Followers</p>
              <ul>
                  {follows}
              </ul>
            

            </div> 
        )
    }
}

export default withRouter(FollowingProfileIndex);