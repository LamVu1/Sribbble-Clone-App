import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import PostIndexItem from '../posts/post_index_item';




import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileLikeIndex from './profile_like';
import {getUser, exitProfile} from '../../reducers/profile/profile_actions';
import {fetchLikes} from '../../reducers/likes/likes_action';
import {fetchPost} from '../../reducers/posts/posts_actions';
import {closeModal, openModal} from '../../reducers/ui/modal_action';



class ProfileLikeIndex extends React.Component{
    constructor(props){
        super(props);
        this.state ={liked:[], profile:[], posts:[]};
        this.pic = '';
        this.filtering = this.filtering.bind(this);
      
    }

    componentDidMount(){    
        this.props.getUser(this.props.author_id).then(profile=>
            {
            this.setState({liked: [...this.state.liked, profile.user.likes],profile:[...this.state.profile, profile.user] });
                this.filtering();
        }
        );
        
    }
    filtering(){
        let arr =[]; 
       Object.values(this.state.liked).map((ele)=>{
           ele.map((el)=>{
               arr.push(parseInt(el.post_id))
           })
       })
       let post = {id:1,arr: arr}
       this.props.fetchPost(post).then(post =>{
        this.setState({posts: [...this.state.posts, ...Object.values(post.post)] });
       })
    }


    render(){
        let name;
        this.state.profile.map((profile,idx)=>{
            name=<h1 key={idx}>{profile.username}</h1>
            this.pic = profile.imageURL;
        })

       

        let posts = this.state.posts.map((post,idx)=>{
            
            return(
                    <PostIndexItem
                        key= {idx}
                        post={post}
                        closeModal={this.props.closeModal}
                        deletePost = {this.props.deletePost}
                        openModal={this.props.openModal}
                    />
                )
            }
        )



        return(
            <div className="Profile-Likes-Container">
                <ProfileNavContainer 
                author_id = {this.props.author_id}
                />
                <div className="Author-Header-Container">
                    <div className="Author-Header">
                    <Link to={`/profile/${this.props.author_id}`}>
                        <img className="Profile-Picture" src={this.pic} alt=""/> {name} 
                    </Link>
                   <span>|</span>Likes 
                    </div>
                </div>
                <ul className="Profile-Likes-List">
                    {posts}
                </ul>

          </div> 
        )
    }
}




// const mapStateToProps=(state, ownProps)=>{
        
//     return(
//         {   
//             author_id: parseInt(ownProps.match.params.id),

//         }
//     )
// }

// const mapDispatchToProps=dispatch=>{
    
//     return(
//         {
//             getUser: (userId)=> dispatch( getUser(userId)),
//             exitProfile: ()=>dispatch(exitProfile()),
//             fetchLikes: (post_id) => dispatch(fetchLikes(post_id)),
//             fetchPost: (post) => dispatch( fetchPost(post)),
//             openModal:(modal,data) => dispatch( openModal(modal, data)),
//             closeModal: () => dispatch( closeModal())

//         }
//     )
// }

export default connect(null, null)(ProfileLikeIndex);


