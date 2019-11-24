import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndex from '../comments/comment_index_container';
import LikeIndex from '../likes/like_index_container';
import FollowIndex from '../follows/follow_index_container';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calc';


class PostDetail extends React.Component{

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
        this.handleLink = this.handleLink.bind(this);
        // debugger
        
    }

  

    handleDelete(id){
        this.props.deletePost(id)
    }   

    handleProfile(){
        this.props.history.push({pathname: `/profile/${this.props.post.author_id}`})
        this.props.closeModal()
    }

    handleLink(){
        this.props.closeModal()
    }

    render(){
     
        let deletebtn;
        if(this.props.user_id===this.props.post.author_id){
            deletebtn = <button className="Delete-Btn" onClick={()=>this.handleDelete(this.props.post.id)}>Delete</button>
        }
        
        
        return(
            <div className="Post-index">
                <div className="Top-Container">
                    <div className="Author-Container">
                        <Link to={`/profile/${this.props.post.author_id}`} onClick={this.handleLink }>
                            <img className="Post-ProfilePicture" src={this.props.post.profile_picture}/>
                        
                        </Link>
                        <div className="Post-index-author-Div">


                        <h1 className="Post-index-title">{this.props.post.title}</h1>
                        <div className="Post-index-author-Container">
                          
                            <p className="Post-index-author">by 
                                <button onClick={this.handleProfile}>{this.props.post.author}</button>
                            </p>  
                            <span>|</span>
                         
                            <FollowIndex 
                                post={this.props.post} 
                                follows={this.props.follows}
                            />


                          
                        </div>
                        </div>
                    </div>
                    <div className="Like-Save-Container">
                        <LikeIndex 
                        PostId = {this.props.post.id} 
                        Likes={this.props.likes}
                        />
                    </div>
                </div>
                    

                    <img src={this.props.post.imageURL} />
                    <br/>
                    {deletebtn}


                    <div className="Post-index-container">
                        <p className="Post-index-description">
                        {this.props.post.description}</p>
                        <div className="Post-Lower-Div">
                        
                            <CommentIndex
                            PostId={this.props.post.id}
                            currentUser = {this.props.user_id}
                            commentlike = {this.props.post.commentlike}
                            />
                        
                            <div className="Post-status">
                                <p><i class="fas fa-eye"></i></p>
                                <p>
                                <i className="fas fa-heart"></i> {this.props.likes.length} Likes
                                </p>
                                <p className="Comment-Time"><i class="far fa-calendar-alt"></i> {calcTime(this.props.post.create_at)}</p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

}


export default withRouter(PostDetail);