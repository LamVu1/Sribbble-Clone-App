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
   
    render(){
        let authorPost = this.props.posts.filter(post=>post.author_id===this.props.user.id)
        
        let posts = authorPost.map((post, idx)=>
        {
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
    
    
        return(
            <div>
                <div className="Profile-Summary">{this.props.user.author}</div>
                <ProfileMessageContainer />
                <FollowIndex
                 author_id={this.props.author_id} 
                 follows={this.props.user.follower_id}/>
                {posts}
            </div>
        )
    }
}

export default withRouter(ProfileIndex);