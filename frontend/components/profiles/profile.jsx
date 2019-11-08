import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import PostIndexItem from '../posts/post_index_item';
import FollowIndex from '../follows/follow_index_container';
import ProfileMessageContainer from './message'
import { throws } from 'assert';
import { pseudoRandomBytes } from 'crypto';


class ProfileIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPosts()
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
    })

    // <ProfileMessageContainer 
    //     id={this.props.user.id}
    //     message={this.props.user.message}
    // />
    // <FollowIndex
    //  author_id={this.props.author_id} 
    //  follows={this.props.user.follower_id}/>
    // {posts}
    
        return(
            <div>
                <h1>Hello</h1>

                <ul>
                    {posts}
                </ul>
            </div>
        )
    }
}

export default withRouter(ProfileIndex);