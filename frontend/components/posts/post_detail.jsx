import React from 'react';

const PostDetail =(props)=>{
    return(
        <div className="Post-index">
            <p>{props.post.title}</p>
            <img src={props.post.imageURL} />
            <p>{props.post.description}</p>
        </div>
    )
}

export default PostDetail;