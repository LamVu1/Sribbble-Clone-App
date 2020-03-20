import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import PostIndexItem from '../posts/post_index_item';

import { connect } from 'react-redux';
// import {getUser, exitProfile} from '../../reducers/profile/profile_actions';
// import {fetchLikes} from '../../reducers/likes/likes_action';
// import {fetchPost} from '../../reducers/posts/posts_actions';
// import {closeModal, openModal} from '../../reducers/ui/modal_action';

import {fetchPosts} from '../../reducers/posts/posts_actions';



class ProfileLikes extends React.Component{
    constructor(props){
        super(props);
        this.state ={liked:[], profile:[], posts:[]};
        this.pic = '';
      
    }

    componentDidMount(){
        this.props.fetchPosts(this.props.posts);
    }
    
        
    // }
    // filtering(){
    //     let arr =[]; 
    //    Object.values(this.state.liked).map((ele)=>{
    //        ele.map((el)=>{
    //            arr.push(parseInt(el.post_id))
    //        })
    //    })
    //    let post = {id:1,arr: arr}
    //    this.props.fetchPost(post).then(post =>{
    //     this.setState({posts: [...this.state.posts, ...Object.values(post.post)] });
    //    })
    // }


    render(){
        // let name;
        // this.state.profile.map((profile,idx)=>{
        //     name=<h1 key={idx}>{profile.username}</h1>
        //     this.pic = profile.imageURL;
        // })

       

        // let posts = this.state.posts.map((post,idx)=>{
            
        //     return(
        //             <PostIndexItem
        //                 key= {idx}
        //                 post={post}
        //                 closeModal={this.props.closeModal}
        //                 deletePost = {this.props.deletePost}
        //                 openModal={this.props.openModal}
        //             />
        //         )
        //     }
        // )


                // <div className="Author-Header-Container">
                //     <div className="Author-Header">
                //     <Link to={`/profile/${this.props.author_id}`}>
                //         <img className="Profile-Picture" src={this.pic} alt=""/> {name} 
                //     </Link>
                //    <span>|</span>Likes 
                //     </div>
                // </div>
                // <ul className="Profile-Likes-List">
                //     {posts}
                // </ul>



                let content;
        
                if(this.props.postss !== undefined){
                   content = this.props.postss.map((post,idx)=>{
                       return(
                           
                        <PostIndexItem
                        key= {idx}
                        post={post}
                        
                        />
        
                       )
                   }
                   )
                }

        return(
            <div className="Profile-Likes-Container">
               <p>LIKES</p>
               <ul className="Post-Index">
                    {content}

                </ul>

          </div> 
        )
    }
}




const mapStateToProps=(state, ownProps)=>{
        
    return(
        {   
            postss: Object.values(state.entities.posts)

        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
         
            fetchPosts: (post) => dispatch( fetchPosts(post))
            
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLikes);


