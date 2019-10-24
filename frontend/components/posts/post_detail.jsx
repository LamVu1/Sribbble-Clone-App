import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndex from '../comments/comment_index_container';

class PostDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state ={detail: ''}
    this.handleDelete = this.handleDelete.bind(this)
    }


    handleDelete(id){
        this.props.deletePost(id)
    }




    render(){
        
        return(
            <div className="Post-index">
                <h1 className="Post-index-title">{this.props.post.title}</h1>
                <p>by {this.props.post.author}</p>
                <img src={this.props.post.imageURL} />
                <br/>
                <p className="Post-index-description">{this.props.post.description}</p>
                <button onClick={()=>this.handleDelete(this.props.post.id)}>Delete</button>
                <CommentIndex
                PostId={this.props.post.id}
                />
            </div>
        )
    }

}


export default PostDetail;