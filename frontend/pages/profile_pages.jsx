import React from 'react';
import { connect } from 'react-redux';
import {getUser , exitProfile} from '../reducers/profile/profile_actions';
import PostIndex from '../components/posts/post_index';
import FollowerProfile from '../components/profiles/profile_follow';
import ProfileLikes from '../components/profiles/profile_like';
import ProfileMessage from '../components/profiles/message';
import Follow from '../components/follows/follow';


class ProfilePage extends React.Component{
    constructor(props){
        super(props);       
        this.state = {
            profile: {},
            comp: 1
        }
    }

    componentDidMount(){
        this.props.getUser(this.props.profileId)
    }
    componentWillUnmount(){
        this.props.exitProfile();
    }

    handleUpdate(n){
        this.setState({comp: n})
    }

    render(){
      
        let {profile} = this.props
        

        let likes = 0; 
        let followers = 0;
        let authors=0;
        let posts=0;  
        
        
        
        if(Object.keys(this.props.profile).length!==0){
            followers = profile.followers.length;
            likes = profile.likes.length;
            authors = profile.authors.length;
        posts = profile.posts.length;
        }


        let content;
        if(this.state.comp===1){
            
            content = 
            
            <div className="Profile-Content">
                <div className='Profile-Summary'>
                    <h1>{profile.username}</h1>
                    <p >{profile.location}</p>
                    <img  className="Profile-Picture" src={profile.imageURL} alt=""/>
                    <Follow AuthorId = {this.props.profileId}/>
                    <ProfileMessage />
                </div>
                <div className="Profile-Posts">
                <PostIndex posts={profile.posts} />
                </div>
            </div>
            

        }

        if(this.state.comp===2){
            content = <div className="Profile-Content">
            <ProfileLikes 
                posts={profile.likes}
                authorId={this.props.profileId}
            />
                </div>
        }

        if(this.state.comp===3){
            content = <div className="Profile-Content">
            <FollowerProfile authorId={this.props.profileId}/>
            </div>
        }
        // <button onClick={()=>this.handleUpdate(3)}>followers:{followers}
        // </button>


        return(
            <div className="Profile-Container">
                <div className="Navigation-Div">
                        <div className='Navigation-btn' onClick={()=>this.handleUpdate(2)}>Liked: {likes}
                        </div>
                        <div className='Navigation-btn' onClick={()=>this.handleUpdate(3)}>Followers: {authors}
                        </div>
                        <div className='Navigation-btn' onClick={()=>this.handleUpdate(1)}>Shots: {posts}
                        </div>
                </div>
                {content}                   
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
            getUser: (userId)=> dispatch(getUser(userId)),

            exitProfile: ()=> dispatch(exitProfile()),

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