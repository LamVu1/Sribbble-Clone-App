import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';

class LikeIndex extends React.Component{
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
    }

    handleLike(){
        this.props.createLike(this.props.PostId)
    }

    handleUnlike(){
        let likeId;
        likeId=this.props.likes.filter(like => like.user_id === this.props.currentUser)       
        this.props.deleteLike(likeId[0].id)
    }
     
    render(){
        return(
            <div>
             
                   {
                       this.props.likes.filter(like=>like.user_id===this.props.currentUser).length===0

                        ?<button className="Like-btn" onClick={this.handleLike}><i className="fas fa-heart"></i> Like</button>
                        :<button className="Unlike-btn" onClick={this.handleUnlike}><i className="fas fa-heart"></i> Liked</button>

                    }
            
            </div>
        )
    }
}

export default withRouter(LikeIndex);