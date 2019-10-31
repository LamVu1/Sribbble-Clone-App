import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';

class FollowIndex extends React.Component{
    constructor(props) {
        super(props);
        

        }

        
      
    render(){
        
        
        return(
            <div>
               <h1>Follows</h1>
                <div>
                    {(this.props.follows.filter(follow=>follow.follower_id===this.props.currentuser_id).length===0)
                    ?<h1>NO</h1>:<h1>YES</h1>
            
                }
                </div>
            </div>
        )
    }
}

export default withRouter(FollowIndex);