import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndex from '../comments/comment_index_container';
import LikeIndex from '../likes/like_index_container'
import FollowIndex from '../follows/follow_index_container'

class PostDetail extends React.Component{

    constructor(props){
        super(props);
        this.state ={detail: ''};
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        this.props.fetchLikes(this.props.post.id)
        this.props.fetchFollows(this.props.post.author_id)
    }


    handleDelete(id){
        this.props.deletePost(id)
    }


    render(){
        
        return(
            <div className="Post-index">
                <div className="Top-Container">
                    <div className="Author-Container">
                        <h1 className="Post-index-title">{this.props.post.title}</h1>
                        <div className="Post-index-author-Container">
                            <p className="Post-index-author">by {this.props.post.author}</p>
                            <span>|</span>
                            <FollowIndex 
                                post={this.props.post} 
                                follows={this.props.follows}
                            />
                        </div>
                    </div>
                    <div className="Like-Save-Container">
                        <LikeIndex 
                        PostId = {this.props.post.id} 
                        Likes={this.props.post.likes}
                        />
                    </div>
                </div>
                    

                    <img src={this.props.post.imageURL} />
                    <br/>

                    <button onClick={()=>this.handleDelete(this.props.post.id)}>Delete</button>

                    <div className="Post-index-container">
                        <p className="Post-index-description">
                        {this.props.post.description}</p>
                    
                        <CommentIndex
                        PostId={this.props.post.id}
                        />
                        
                    </div>
            </div>
        )
    }

}


export default PostDetail;