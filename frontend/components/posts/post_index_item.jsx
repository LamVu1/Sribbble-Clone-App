import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = props =>{
    return(
    <div className="Post-index-item" onClick={()=>props.openModal( 'PostDetail', props.post)} >
        <img src={props.post.imageURL} />
    </div>
    )
}

export default PostIndexItem;