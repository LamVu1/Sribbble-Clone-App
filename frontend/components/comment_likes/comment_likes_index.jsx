import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';

class CommentLikeIndex extends React.Component{
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this)
        this.handleUnlike = this.handleUnlike.bind(this)
    }

    handleLike(){
        let commentLike = {post_id: this.props.post_id, comment_id: this.props.comment_id }
        this.props.createcommentLike(commentLike)
       
    }
    
    handleUnlike(){
        let commentLike = this.props.likes.filter(commentlikes => (commentlikes.user_id === this.props.currentuser_id && commentlikes.comment_id=== this.props.comment_id))   
        this.props.deletecommentLike(commentLike[0])
    }
    
   
    render(){
        let count=this.props.likes.filter(commentlikes=>(commentlikes.comment_id=== this.props.comment_id)).length
        
        return(
            <div>
                 
                {
                    this.props.likes.filter(commentlikes=>(commentlikes.user_id===this.props.currentuser_id && commentlikes.comment_id=== this.props.comment_id)).length===0

                        ?   <button className="CommentLike-btn" onClick={this.handleLike}><i className="fas fa-heart"></i>{count}</button>
                        :   <button className="CommentLiked-btn" onClick={this.handleUnlike}><i className="fas fa-heart"></i>{count}</button>

                }

            </div>
        )
    }
}

export default withRouter(CommentLikeIndex);