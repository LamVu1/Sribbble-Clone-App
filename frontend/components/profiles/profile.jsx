import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import PostIndexItem from '../posts/post_index_item';
import FollowIndex from '../follows/follow_index_container';
import ProfileMessageContainer from './message';
import ProfileNavContainer from './profile_nav_container';



class ProfileIndex extends React.Component{
    constructor(props){
        super(props);
        this.state ={profile:[]};
        this.pic = '';
        this.followings = [];
        this.followers = [];
        this.likes = [];
        
    }

    componentDidMount(){
        this.props.fetchPosts()
        this.props.getUser(this.props.author_id).then(profile=>
            {this.setState({profile: [...this.state.profile,profile.user]})});
    }

    componentWillUnmount(){
        this.props.exitProfile();
        
    }
//     <div className="Profile-Lists">
//     <p>Shots {authorPost.length}</p>
//     <p>Following {this.followings.length}</p>
//     <p>Followers {this.followers.length}</p>
//     <p>Likes {this.likes.length}</p>
// </div> 
    render(){
                
        let authorPost = this.props.posts.filter(post=>post.author_id===this.props.author_id)
            
        
        let posts = authorPost.map((post,idx)=>{
            return(
                    <PostIndexItem
                        key= {idx}
                        post={post}
                        closeModal={this.props.closeModal}
                        deletePost = {this.props.deletePost}
                        openModal={this.props.openModal}
                    />
                )
            }
        )
        let location;
        let name;

        this.state.profile.map((profile,idx)=>{
            
            name=<h1 className="Profile-Name" key={idx}>{profile.username}</h1>
            location=<p className="Profile-Location" key={idx}>{profile.location}</p>
            this.pic = profile.imageURL;
            this.followings = profile.authors;
            this.followers = profile.followers;
            this.likes = profile.likes;
        })
      
        return(
            <div className="Profile-Container">
                <ProfileNavContainer 
                   author_id = {this.props.author_id}
                />
                <div className="Profile-Div">
                    <div className="Profile-Summary">
                        <img className="Profile-Picture" src={this.pic} alt=""/>
                        {name}
                        {location}
                        <ProfileMessageContainer 
                            id = {this.props.author_id}
                            currentUser ={this.props.currentUser}
                        />
                    </div>
                    <div className="Profile-Posts">
                        {posts}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileIndex);