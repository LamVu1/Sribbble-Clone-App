import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';

class CommentIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {body: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
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
            let btn;
            if(this.props.currentUser===comment.user_id){
                btn= <button onClick={()=>this.handleDelete(comment)}>Delete Comment</button>
            }
            return(
                <li key={idx} className="Comment-Container">
                    <p className="Comment-Author">{comment.author}</p>
                    <p className="Comment-Body">{comment.body}</p>
                    <p className="Comment-Time">{calcTime(comment.create_at)}</p>
                    {btn}
                </li>
            )
        })

        return(
            <div className="Comment-Section">
                <h1 className="Comment-Count">{comments.length} Responses</h1>
                <div className="Comment-Form-Container">
                    <form className="Comment-Form" onSubmit={this.handleSubmit}>
                        <label>Add Comment:
                            <br/>
                            <textarea className="Comment-Input" type="text" value={this.state.body} onChange={this.handleUpdate('body')}></textarea>
                        </label>
                        <br/>
                        <input className="Comment-Submit" type="submit" value="Submit"/>
                    </form>
                </div>
                
                <ul className="Comment-Body-Section">
                    {comments}
                </ul>
                
            </div>
        )
    }
}

export default withRouter(CommentIndex);