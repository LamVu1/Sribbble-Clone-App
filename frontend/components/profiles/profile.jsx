import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import PostIndexItem from '../posts/post_index_item';
import FollowIndex from '../follows/follow_index_container';
import ProfileMessageContainer from './message'



class ProfileIndex extends React.Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchPosts();
        this.props.getUser(this.props.author_id);
    }
   
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
        let message;
        this.props.profile.map((profile,idx)=>{
            location=<p className="Profile-Location" key={idx}>{profile.location}</p>
            name=<h1 className="Profile-Name" key={idx}>{profile.username}</h1>
            message=profile.message
            
        })    

        return(
            <div className="Profile-Container">
                <div className="Profile-Summary">
                     {name}
                    {location}
                    <ProfileMessageContainer 
                        id={this.props.author_id}
                        message={message}
                    />
                </div>
                <div className="Profile-Posts">
                        {posts}
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileIndex);