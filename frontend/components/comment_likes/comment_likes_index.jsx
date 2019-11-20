import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';

class CommentLikeIndex extends React.Component{
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this)
        this.handleUnlike = this.handleUnlike.bind(this)
        this.state = {change: ''}
    }

    componentDidMount(){
        let commentLike = {post_id: this.props.post_id, comment_id: this.props.comment_id}
        this.props.fetchcommentLikes(commentLike);
    }

    handleLike(){
        let commentLike = {post_id: this.props.post_id, comment_id: this.props.comment_id }
        this.props.createcommentLike(commentLike).then(()=>  {this.setState({change: 'yes'})})
       
    }
    
    handleUnlike(){
        let commentLike = this.props.likes.filter(commentlikes => (commentlikes.user_id === this.props.currentuser_id && commentlikes.comment_id=== this.props.comment_id))   
        this.props.deletecommentLike(commentLike[0]).then(()=> { this.setState({change: 'yes'})})

    }
    
    render(){
        
        return(
            <div>
             <h1>CommentLike</h1>
                 {
                   this.props.likes.filter(commentlikes=>(commentlikes.user_id===this.props.currentuser_id && commentlikes.comment_id=== this.props.comment_id)).length===0
            
                      ?<button className="Like-btn" onClick={this.handleLike}><i className="fas fa-heart"></i> Like</button>
                   :<button className="Unlike-btn" onClick={this.handleUnlike}><i className="fas fa-heart"></i> Liked</button>
            
                }

            </div>
        )
    }
}

export default withRouter(CommentLikeIndex);