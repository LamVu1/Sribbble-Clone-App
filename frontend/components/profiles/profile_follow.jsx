import React from 'react';
import {withRouter, Link} from 'react-router-dom';

import { connect } from 'react-redux';
// import {getUser, exitProfile} from '../../reducers/profile/profile_actions';
import {fetchFollows} from '../../reducers/follows/follows_action';




class FollowerProfile extends React.Component{
    constructor(props){
        super(props);        
        this.handleLink = this.handleLink.bind(this);
    }

    componentDidMount(){    
        this.props.fetchFollows(this.props.authorId)
        // .then(following=>{
            
        //         {this.setState({following: [...this.state.following,...Object.values(following.follows)
        //         ]})}
        //     }
        // );
        // this.props.getUser(this.props.author_id).then(profile=>
        //     {this.setState({profile: [...this.state.profile,profile.user]})});
    }

   handleLink(id){
       this.props.history.push(`/profile/${id}`);
        location.reload();
    }
    render(){


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
        let content = this.props.follower.map((follow,idx)=>{
            return(
                <div key={idx} className='Profile-Follower-Item' onClick={()=>{this.handleLink(follow.follower_id)}}>
                        <img className="Profile-Picture" src={follow.follower_profilepicture} alt="" key={idx}/>
                        <p className="Follower-Name" key={idx}>{follow.follower_username} </p>
                </div>
            )
        })
                
        
        return(
            <div className="Profile-Follower-Container">
               
                <div className="Author-Header-Container">
                    <div className="Author-Header">
                        <div className='Author-Header-Name' onClick={()=>{this.handleLink(this.props.authorId)}}>
                        <img className="Profile-Picture" src={this.props.profileImg} alt=""/>
                            {this.props.profile}
                        </div>
                        <span>|</span>Followers 
                    </div>
                </div>

                <div className='Profile-Follower-Container'>
                    {content}
                </div>
            </div> 
        )
    }
}



const mapStateToProps=(state, ownProps)=>{
        
    return(
        { 
            follower: Object.values(state.entities.follows),
            profile: state.entities.profile.username,
            profileImg: state.entities.profile.imageURL

         }
     )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            fetchFollows: (author_id)=>dispatch(fetchFollows(author_id))

        }
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowerProfile));

