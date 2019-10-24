import React from 'react';
import {withRouter} from 'react-router-dom';


class CommentIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {body: ''}
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleUpdate=this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount(){
        this.props.fetchComments(this.props.PostId)
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
            return(
                <li key={idx}>
                   <p>{comment.author}</p>
                    <p>{comment.body}</p>
                    <button onClick={()=>this.handleDelete(comment)}>Delete Comment</button>
                </li>
            )
        })

        return(
            <div>
                <h1>Responses</h1>
                <ul>
                    {comments}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Comment:
                        <textarea type="text" value={this.state.body} onChange={this.handleUpdate('body')}></textarea>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(CommentIndex);