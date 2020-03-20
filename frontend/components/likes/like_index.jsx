import React from 'react';
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {createLike, deleteLike, fetchLikes} from '../../reducers/likes/likes_action';
import {getUser} from '../../reducers/profile/profile_actions';

import {fetchPosts} from '../../reducers/posts/posts_actions';


class Like extends React.Component{
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);

    }

    componentDidMount(){
        this.props.fetchLikes(this.props.post_id);
    }

    handleLike(){
        this.props.createLike(this.props.post_id);
        if(Object.keys(this.props.profile).length!==0){
            this.props.getUser(this.props.profile.id);
            
            this.props.fetchPosts(this.props.profile.likes);
        }

    }

    handleUnlike(){
        let likeId = this.props.likes.filter(like => like.user_id === this.props.currentuser_id)       
        this.props.deleteLike(likeId[0].id)

        if(Object.keys(this.props.profile).length!==0){
            this.props.getUser(this.props.profile.id)

        }
    }
     
    render(){
        
        return(
            <div>
            {
                this.props.likes.filter(like => like.user_id===this.props.currentuser_id).length===0

                ?<button className="Like-btn" onClick={this.handleLike}><i className="fas fa-heart"></i> Like</button>
                :<button className="Unlike-btn" onClick={this.handleUnlike}><i className="fas fa-heart"></i> Liked</button>
            }
            </div>
        )
    }
}





const mapStateToProps=(state, ownProps)=>{
  
    return(
        {   profile: state.entities.profile,
            post_id: ownProps.PostId,
            likes: Object.values(state.entities.likes),
            currentuser_id: state.session.id
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            createLike: (post_id) => dispatch( createLike(post_id)),
            deleteLike: (id) => dispatch( deleteLike(id)),
            fetchLikes: (post_id) => dispatch(fetchLikes(post_id)),
            getUser: (userId)=> dispatch(getUser(userId)),
            fetchPosts: (post) => dispatch( fetchPosts(post))


        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Like);
