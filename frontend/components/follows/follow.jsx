import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';

class FollowIndex extends React.Component{
    constructor(props) {
        super(props);
        
        this.handleUpdate=this.handleUpdate.bind(this)
    }

    componentDidMount(){
        this.props.fetchFollows(this.props.author_id) 
    }
      
    handleUpdate(){
        this.props.createFollow(this.props.author_id)
        this.props.fetchFollows(this.props.author_id) 

    }


    render(){
        console.log(this.props.follows)
        return(
            <div>
               <h1>Follows</h1>
               <button onClick={this.handleUpdate}>Follow Me</button>
            </div>
        )
    }
}

export default withRouter(FollowIndex);