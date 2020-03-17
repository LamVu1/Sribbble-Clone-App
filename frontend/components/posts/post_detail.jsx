import React from 'react';
import { Link } from 'react-router-dom';
import Comment from '../comments/comment_index';
import Like from '../likes/like_index';
import FollowIndex from '../follows/follow_index_container';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calc';
import {updateTime} from '../../utils/updatetime';


import { connect } from 'react-redux';
// import PostDetail from '../posts/post_detail';
// import {deletePost} from '../../actions/posts_actions';
// import {withRouter} from 'react-router-dom';
// import {fetchFollows} from '../../actions/follows_action';
// import {fetchLikes} from '../../actions/likes_action';
// import {closeModal} from '../../actions/modal_action';
// import {updatePost} from '../../actions/posts_actions';




class PostDetail extends React.Component{

    constructor(props){
        super(props);
        // this.handleProfile = this.handleProfile.bind(this);
        // this.handleLink = this.handleLink.bind(this);  
        
    }

    // componentDidMount(){
    //     // if(!this.updated){
    //     //     this.props.post.view +=1;
    //     //     this.props.updatePost(this.props.post);
    //     //     this.updated = true;
    //     // }
    //     // else{
    //         if(updateTime(this.props.post.updated_at)){
    //         this.props.post.view +=1;
    //         this.props.updatePost(this.props.post);
    //     }
    // }
  

    // handleDelete(id){
    //     this.props.deletePost(id)
    // }   

    // handleProfile(){
    //     this.props.history.push({pathname: `/profile/${this.props.post.author_id}`})
    //     this.props.closeModal()
    // }

    // handleLink(){
    //     this.props.closeModal()
    // }

    render(){
        let {post, user_id} = this.props
        
        let deletebtn;
        if(user_id=== post.author_id){
            deletebtn = <button className="Delete-Btn">Delete</button>
        }
        
        
        // return(
        //     <div className="Post-index">
        //         <div className="Top-Container">
        //             <div className="Author-Container">
        //                 <Link to={`/profile/${this.props.post.author_id}`} onClick={this.handleLink }>
        //                     <img className="Post-ProfilePicture" src={this.props.post.profile_picture}/>
                        
        //                 </Link>
        //                 <div className="Post-index-author-Div">


        //                 <h1 className="Post-index-title">{this.props.post.title}</h1>
        //                 <div className="Post-index-author-Container">
                          
        //                     <p className="Post-index-author">by 
        //                         <button onClick={this.handleProfile}>{this.props.post.author}</button>
        //                     </p>  
        //                     {(this.props.post.author_id!==this.props.user_id)
                            
        //                      ? 
        //                      <div className="Post-index-follow">
        //                      <div className="Post-index-divider">|</div>
        //                      <FollowIndex 
        //                         post={this.props.post} 
        //                         follows={this.props.follows}
        //                     />
        //                     </div>
        //                     : <div></div>
        //                     }

                          
        //                 </div>
        //                 </div>
        //             </div>
        //             <div className="Like-Save-Container">
        //                 <LikeIndex 
        //                 PostId = {this.props.post.id} 
        //                 Likes={this.props.likes}
        //                 />
        //             </div>
        //         </div>
                    

        //             <img src={this.props.post.imageURL} />
        //             <br/>
        //             {deletebtn}


        //             <div className="Post-index-container">
        //                 <p className="Post-index-description">
        //                 {this.props.post.description}</p>
        //                 <div className="Post-Lower-Div">
                        
        //                     <CommentIndex
        //                     PostId={this.props.post.id}
        //                     currentUser = {this.props.user_id}
        //                     commentlike = {this.props.post.commentlike}
        //                     />
                        
        //                     <div className="Post-status">
        //                         <p><i className="fas fa-eye"></i>{this.props.post.view} views</p>
        //                         <p>
        //                         <i className="fas fa-heart"></i> {this.props.likes.length} likes
        //                         </p>
        //                         <p className="Comment-Time"><i className="far fa-calendar-alt"></i> {calcTime(this.props.post.created_at)}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //     </div>
        // )


         
        //                  
                        
        //                     <div className="Post-status">
        //                         <p><i className="fas fa-eye"></i>{this.props.post.view} views</p>
        //                         <p>
        //                         <i className="fas fa-heart"></i> {this.props.likes.length} likes
        //                         </p>
        //                         <p className="Comment-Time"><i className="far fa-calendar-alt"></i> {calcTime(this.props.post.created_at)}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //     </div></div>
        return(
            <div className='Post-index'>
            <div className="Top-Container">
            <h1 className="Post-index-title">{post.title}</h1>
              <Like 
               PostId = {post.id} 
              />
            </div>
            <img src={post.imageURL} />
            {deletebtn}
            <div className="Post-index-container">
                <p className="Post-index-description">
                    {post.description}
                </p>
            </div>
            <Comment
                PostId = {post.id} 
            />
        </div>
        )
    }

}






const mapStateToProps = (state, post)=>{

    return(
      {
       
        user_id: state.session.id

        }
        )
    };
    
    // follows: Object.values(state.entities.follows),
    // likes: Object.values(state.entities.likes),
// const mapDispatchToProps = dispatch => {
  
//     return(
//       {
//           deletePost: (id)=>dispatch(deletePost(id)),
//           closeModal: () => dispatch( closeModal()),
//           updatePost: (post)=>dispatch(updatePost(post))

//       }
//     )
// };
  
export default connect(mapStateToProps, null)(PostDetail);
  