import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import CommentLikeIndex from '../comment_likes/comment_likes_index_container';

class CommentIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {body: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleLink = this.handleLink.bind(this);
    }

    componentDidMount(){
        this.props.fetchComments(this.props.PostId);
        let commentLike = {post_id: this.props.PostId, comment_id: 1}
        this.props.fetchcommentLikes(commentLike);
    }

    handleLink(){
        this.props.closeModal()
    }


    handleUpdate(field){
        return(e=>{this.setState({[field]: e.target.value})});
    }

    handleDelete(comment){
        this.props.deleteComment(comment)
    }

    handleSubmit(e){
        e.preventDefault();
        const comment = {body: this.state.body, post_id: this.props.PostId}
        this.props.createComment(comment);
        this.props.fetchComments(this.props.PostId)
        this.setState({body:''})
    }
     
    render(){
        
        let comments = this.props.comments.map((comment, idx)=>{
            let btn;
            if(this.props.currentUser===comment.user_id){
                btn= <button className="Comment-Deletebtn" onClick={()=>this.handleDelete(comment)}>Delete</button>
            }
            return(
                <li key={idx} className="Comment-Container">
                    <Link to={`/profile/${comment.user_id}`} onClick={this.handleLink}>
                        <img className="Comment-ProfilePicture" src={comment.profile_picture}/>
                    </Link>
                    <div className="Comment-Content">
                        <p className="Comment-Author">
                            <Link to={`/profile/${comment.user_id}`} onClick={this.handleLink}>
                        {comment.author}
                            </Link>
                        </p>
                        <p className="Comment-Body">{comment.body}</p>
                        <div className="Comment-Bottom-Div">
                        <p className="Comment-Time">{calcTime(comment.create_at)}</p>
                        </div>
                        {btn}
                    </div>
                    <CommentLikeIndex 
                        post_id = {this.props.PostId}
                        comment_id = {comment.id}
                        commentlike = {this.props.commentlike}
                    
                    />
                </li>
            )
        })

        return(
            <div className="Comment-Section">
                <div className="Comment-Form-Container">
                    <form className="Comment-Form" onSubmit={this.handleSubmit}>
                        <label>Add Comment:</label>
                            <textarea className="Comment-Input" type="text" value={this.state.body} onChange={this.handleUpdate('body')}></textarea>
                        <br/>
                        <input className="Comment-Submit" type="submit" value="Submit"/>
                    </form>
                </div>
                <h1 className="Comment-Count">{comments.length} Responses</h1>
                
                <ul className="Comment-Body-Section">
                    {comments}
                </ul>
                
            </div>
        )
    }
}

export default withRouter(CommentIndex);