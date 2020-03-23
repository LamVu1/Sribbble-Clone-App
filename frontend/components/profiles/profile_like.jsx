import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import PostIndexItem from '../posts/post_index_item';

import { connect } from 'react-redux';
// import {getUser, exitProfile} from '../../reducers/profile/profile_actions';
// import {fetchLikes} from '../../reducers/likes/likes_action';
// import {fetchPost} from '../../reducers/posts/posts_actions';
// import {closeModal, openModal} from '../../reducers/ui/modal_action';

import {fetchPost} from '../../reducers/posts/posts_actions';



class ProfileLikes extends React.Component{
    constructor(props){
        super(props);
        this.state ={liked:[], profile:[], posts:[]};
        this.pic = '';
        this.handleLink = this.handleLink.bind(this);
    }

    componentDidMount(){
        
        this.props.fetchPost(this.props.posts.map(like=>like.post_id));
    }
    
        
    handleLink(id){
        this.props.history.push(`/profile/${id}`);
         location.reload();
     }
   


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
               <div className="Author-Header-Container">
                <div className="Author-Header">
                <div className='Author-Header-Name' onClick={()=>{this.handleLink(this.props.authorId)}}>
                    <img className="Profile-Picture"  src={this.props.profileImg} alt=""/>

                    {this.props.profile}
                </div>
                 <span>|</span>Likes 
                    </div>
                 </div>
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
            postss: Object.values(state.entities.posts),
            profile: state.entities.profile.username,
            profileImg: state.entities.profile.imageURL

        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
         
            fetchPost: (post) => dispatch( fetchPost(post))
            
        }
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileLikes));


