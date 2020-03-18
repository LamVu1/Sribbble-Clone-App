import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';


import { connect } from 'react-redux';
import {fetchcommentLikes, createcommentLike, deletecommentLike} from '../../reducers/comment_likes/comment_likes_actions';



class CommentLike extends React.Component{
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
      
        let {likes, currentuser_id, comment_id} = this.props
        let count = likes.filter(commentlikes=>(commentlikes.comment_id === comment_id )).length;
        
        return(
            <div className="CommentLike-Container">
                {   
                    likes.filter(commentlikes=>(commentlikes.user_id === currentuser_id && commentlikes.comment_id === comment_id )).length===0
            
                        ?   <button className="CommentLike-btn" onClick={this.handleLike}><i className="fas fa-heart"></i>{count}</button>
                        :   <button className="CommentLiked-btn" onClick={this.handleUnlike}><i className="fas fa-heart"></i>{count}</button>
            
                }
               
            </div>
        )
    }
}



const mapStateToProps=(state, ownProps)=>{
  
    return(
        {
            comment_id: ownProps.comment_id,
            post_id: ownProps.post_id,
            likes: Object.values(state.entities.comment_likes),
            currentuser_id: state.session.id
        }
        )
    }

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            fetchcommentLikes: (comment) => dispatch(fetchcommentLikes(comment)),
            createcommentLike: (commentlike) => dispatch( createcommentLike(commentlike)),
            deletecommentLike: (commentlike) => dispatch( deletecommentLike(commentlike))
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentLike)
