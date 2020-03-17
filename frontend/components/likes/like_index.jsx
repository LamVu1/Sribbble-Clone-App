import React from 'react';
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {createLike, deleteLike, fetchLikes} from '../../reducers/likes/likes_action';

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
        this.props.createLike(this.props.post_id)
    }

    handleUnlike(){
        let likeId = this.props.likes.filter(like => like.user_id === this.props.currentuser_id)       
        this.props.deleteLike(likeId[0].id)
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
        {
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
            fetchLikes: (post_id) => dispatch(fetchLikes(post_id))
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Like);
