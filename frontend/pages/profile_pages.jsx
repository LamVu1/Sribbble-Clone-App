import React from 'react';
import { connect } from 'react-redux';
import {getUser} from '../reducers/profile/profile_actions';
import PostIndex from '../components/posts/post_index';
import ProfileNavigation from '../components/profiles/profile_nav';


class ProfilePage extends React.Component{
    constructor(props){
        super(props);       
        this.state = {
            profile: {}
        }
    }

    componentDidMount(){
        this.props.getUser(this.props.profileId)
    }

    render(){
      

        
        //  let content = this.props.profile.map((profile,idx)=>{
        //      return(
        //         <div>
                    
        //         </div>
        //         )
        //     }    
        // )
        // let {profile} = this.props
//         let content = <div>


        // let posts = profile.posts.map((post)=>
        //     {
        //     return(
                
        //         <img src={post.imageURL} />
        //     )
        //     }
        //     )

         // <div className="Profile-Div">
                //     <div className="Profile-Summary">
                //         <img className="Profile-Picture" src={this.pic} alt=""/>
                //         {name}
                //         {location}
                //         <ProfileMessageContainer 
                //             id = {this.props.author_id}
                //             currentUser ={this.props.currentUser}
                //         />
                //     </div>
                //     <div className="Profile-Posts">
                //         {posts}
                //     </div>
                // </div>


        let {profile} = this.props
        
        return(
            <div className="Profile-Container">
                <div className="Profile-Div">
                    <div>
                    <ProfileNavigation 
                        followers = {profile.followers}
                        authors = {profile.authors}
                        likes = {profile.likes}
                        posts = {profile.posts}

                    />
                    </div>
                    <div className="Profile-Summary">
                        <h1>{profile.username}</h1>
                        <p >{profile.location}</p>
                        <img  className="Profile-Picture" src={profile.imageURL} alt=""/>
                    </div>
                    <div className="Profile-Posts">
                        <PostIndex posts={profile.posts} />
                    </div>
                </div>

            </div>
        )
    }
}


const mapStateToProps=(state, ownProps)=>{
        
    return(
        {   
            profileId: ownProps.match.params.id,
            profile: state.entities.profile
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            getUser: (userId)=> dispatch(getUser(userId))

        }
        )
    }
    
    // openModal:(modal,data) => dispatch( openModal(modal, data)),
    // closeModal: () => dispatch( closeModal()),


export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage);


 // componentWillUnmount(){
    //     this.props.exitProfile();
        
    // }
//     <div className="Profile-Lists">
//     <p>Shots {authorPost.length}</p>
//     <p>Following {this.followings.length}</p>
//     <p>Followers {this.followers.length}</p>
//     <p>Likes {this.likes.length}</p>
// </div> 
   
                
        // let authorPost = this.props.posts.filter(post=>post.author_id===this.props.author_id)
            
        
        // let posts = authorPost.map((post,idx)=>{
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
        // let location;
        // let name;

        // this.state.profile.map((profile,idx)=>{
            
        //     name=<h1 className="Profile-Name" key={idx}>{profile.username}</h1>
        //     location=<p className="Profile-Location" key={idx}>{profile.location}</p>
        //     this.pic = profile.imageURL;
        //     this.followings = profile.authors;
        //     this.followers = profile.followers;
        //     this.likes = profile.likes;
        // })
      
                // <ProfileNavContainer 
                //    author_id = {this.props.author_id}
                // />
                // <div className="Profile-Div">
                //     <div className="Profile-Summary">
                //         <img className="Profile-Picture" src={this.pic} alt=""/>
                //         {name}
                //         {location}
                //         <ProfileMessageContainer 
                //             id = {this.props.author_id}
                //             currentUser ={this.props.currentUser}
                //         />
                //     </div>
                //     <div className="Profile-Posts">
                //         {posts}
                //     </div>
                // </div>