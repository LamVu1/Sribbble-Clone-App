import React from 'react';

class PostDetail extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        
        return(
            <div className="Post-index">
                <p className="Post-index-title">{this.props.post.title}</p>
                <img src={this.props.post.imageURL} />
                <br/>
                <p className="Post-index-description">{this.props.post.description}</p>
            </div>
        )
    }

}


export default PostDetail;