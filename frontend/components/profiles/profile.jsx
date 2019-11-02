import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import PostIndexItem from '../posts/post_index_item';

class ProfileIndex extends React.Component{
    constructor(props){
        super(props);
       
    }
    componentDidMount(){
        this.props.fetchPosts()
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
                {posts}
                {console.log(this.props)}
            </div>
        )
    }
}

export default withRouter(ProfileIndex);