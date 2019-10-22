import React from 'react';
import { Link } from 'react-router-dom';

class PostDetail extends React.Component{
    constructor(props) {
        super(props);
        
    }

    handleDelete(id){
        this.props.deletePost(id).then(()=>this.props.history.push('/'))
    }

    render(){
        
        console.log(this.props)
        return(
            <div className="Post-index">
                <h1 className="Post-index-title">{this.props.post.title}</h1>
                <p>by {this.props.post.author}</p>
                <img src={this.props.post.imageURL} />
                <br/>
                <p className="Post-index-description">{this.props.post.description}</p>
                <button onClick={()=>this.props.deletePost(this.props.post.id)}>Delete</button>
            </div>
        )
    }

}


export default PostDetail;