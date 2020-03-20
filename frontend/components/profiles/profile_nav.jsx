import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import {getUser, exitProfile} from '../../reducers/profile/profile_actions';




class ProfileNavigation extends React.Component{
    constructor(props){
        super(props);
      this.followers = 0;
      this.posts = 0;
      this.likes = 0;
      this.authors = 0;
      this.likers =0;

  
    }


    render(){

        if(this.props.followers !==undefined){
            this.followers = this.props.followers.length;
        }
 
        if(this.props.posts !==undefined){
            this.posts = this.props.posts.length;
        }

        if(this.props.likes !==undefined){
            this.likes = this.props.likes.length;
        }

        if(this.props.authors !==undefined){
            this.authors = this.props.authors.length;
        }

        

        // this.state.profile.map((profile,idx)=>{
        //     this.followings = profile.authors;
        //     this.followers = profile.followers;
        //     this.likes = profile.likes;
        //     this.shots = profile.posts
        // })

                // <div className="Profile-List-Div">
                //     <Link to={`/profile/${this.props.author_id}`}>
                //         Shots
                //     </Link>
                //     <p>{this.shots.length}</p>
                // </div>
                // <div className="Profile-List-Div">
                //     <Link to={`/following/${this.props.author_id}`}>
                //         Followers
                //     </Link>
                //     <p>{this.followings.length}</p>
                // </div>
                // <div className="Profile-List-Div">
                //     <Link to={`/like/${this.props.author_id}`}>
                //         Likes
                //     </Link>
                //     <p>{this.likes.length}</p>
                // </div>

                // <p>{this.followers}</p>
                // <p>{this.posts}</p>
                // <p>{this.authors}</p>
        return(
            <div className="Profile-Lists">
                <h1>LINKS</h1>
                <p>{this.followers}</p>
                <p>{this.authors}</p>
                <p>{this.posts}</p>
                <p>{this.likes}</p>
            </div> 
        )
    }
}



// const mapStateToProps=(state, ownProps)=>{
//         
//     return(
//         {  
//             likers:state.entities.profile.likes

//         }
//     )
// }

// const mapDispatchToProps=dispatch=>{
    
//     return(
//         {    
//             getUser: (userId)=> dispatch( getUser(userId))
           
//         }
//     )
// }

export default connect(null, null)(ProfileNavigation);

