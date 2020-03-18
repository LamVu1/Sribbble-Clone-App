import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import CommentLike from '../comment_likes/comment_likes_index';



import { connect } from 'react-redux';
import {fetchComments, createComment, deleteComment} from '../../reducers/comments/comment_actions';
import {fetchcommentLikes} from '../../reducers/comment_likes/comment_likes_actions';
import {closeModal} from '../../reducers/ui/modal_action';





class Comment extends React.Component{
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
        this.props.fetchcommentLikes(this.props.PostId)
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
        this.setState({body:''})
    }
     
    render(){
        
        let comments = this.props.comments.map((comment, idx)=>{
            let btn;
            if(this.props.currentuser_id===comment.user_id){
                btn= <button className="Comment-Deletebtn" onClick={()=>{this.handleDelete(comment)}}>Delete</button>
            }
            return(
                <li key={idx} className="Comment-Container">
                    <Link to={`/profile/${comment.user_id}`} >
                        <img className="Comment-ProfilePicture" src={comment.profile_picture}/>
                    </Link>
                    <div className="Comment-Content">
                        <p className="Comment-Author">
                            <Link to={`/profile/${comment.user_id}`} >
                        {comment.author}
                            </Link>
                        </p>
                        <p className="Comment-Body">{comment.body}</p>
                        <div className="Comment-Bottom-Div">
                        </div>
                        {btn}
                        <p className="Comment-Time">{calcTime(comment.create_at)}</p>
                    </div>
                    <CommentLike
                    comment_id = {comment.id} 
                    post_id = {comment.post_id}
                    />
                </li>
            )
        })
        
        return(
            <div className="Comment-Section">
                <div className="Comment-Form-Container">
                    <form className="Comment-Form" onSubmit={this.handleSubmit}>
                        <label>Add Comment:</label>
                        <br/>
                         <textarea className="Comment-Input" type="text" value={this.state.body} onChange={this.handleUpdate('body')}></textarea>
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



const mapStateToProps=(state, ownProps)=>{

    return(
        {
            PostId: ownProps.PostId,
            comments: Object.values(state.entities.comments),
            currentuser_id: state.session.id
        }
        )
    }


const mapDispatchToProps=dispatch=>{
   
    return(
        {
            
            fetchComments: (Post_id) => dispatch( fetchComments(Post_id)),
            fetchcommentLikes: (PostId) => dispatch( fetchcommentLikes(PostId)),
            createComment: (comment) => dispatch( createComment(comment)),
            deleteComment: (comment) => dispatch( deleteComment(comment)),
            closeModal: () => dispatch( closeModal())
        }
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(Comment)




