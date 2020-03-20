import React from 'react';
import {withRouter, Link} from 'react-router-dom';

import { connect } from 'react-redux';
// import {getUser, exitProfile} from '../../reducers/profile/profile_actions';
// import {fetchFollows} from '../../reducers/follows/follows_action';




class FollowingProfile extends React.Component{
    constructor(props){
        super(props);
        this.state ={following:[], profile:[]};
        this.pic = '';
        
    }

    // componentDidMount(){    
    //     this.props.fetchFollows(this.props.author_id).then(following=>{
            
    //             {this.setState({following: [...this.state.following,...Object.values(following.follows)
    //             ]})}
    //         }
    //     );
    //     this.props.getUser(this.props.author_id).then(profile=>
    //         {this.setState({profile: [...this.state.profile,profile.user]})});
    // }

   
    render(){
        let name;
        // this.state.profile.map((profile,idx)=>{
        //     name=<h1 key={idx}>{profile.username}</h1>
        //     this.pic = profile.imageURL;
        // })
        
        // let follows = Object.values(this.state.following).map((follow,idx)=>{
        //     console.log(follow)
        //     return(
        //     <li className="Follower-Item"key={idx}>
                
        //         <Link to={`/profile/${follow.follower_id}`}>
        //             <img className="Profile-Picture" src={follow.follower_profilepicture} alt=""/>
        //             <p className="Follower-Name">{follow.follower_username} </p>
        //         </Link>
                        
        //     </li>
        //     )   
        // })
        //   <p className="Follower-Count">{follows.length} Followers</p>
        //   <ul>
        //       {follows}
        //   </ul>
        
                
        //  <img className="Profile-Picture" src={this.pic} alt=""/> {name} 
        return(
            <div className="Profile-Follower-Container">
                <h1>Following</h1>
        <div className="Author-Header-Container">
            <div className="Author-Header">
            <Link to={`/profile/${this.props.authorId}`}>
                YES
            </Link>
                 <span>|</span>Followers 
            </div>
        </div>

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
//             fetchFollows: (author_id)=>dispatch(fetchFollows(author_id))

//         }
//     )
// }

export default connect(null, null)(FollowingProfile);

