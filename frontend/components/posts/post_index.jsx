import React from 'react';
import PostIndexItem from '../posts/post_index_item';



class PostIndex extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.fetchPosts();
    }
     
    render(){
        
        let posts = this.props.posts.map( (post, idx)=>{
            return(
                <PostIndexItem
                key= {idx}
                post={post}
                closeModal={this.props.closeModal}
                openModal={this.props.openModal}
                />
            )
        })
        return(
            <div>
                <ul className="Post-Index">
                    {posts}
                </ul>

            </div>
        )
    }
}

export default PostIndex;