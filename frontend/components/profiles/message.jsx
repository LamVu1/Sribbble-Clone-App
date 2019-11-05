import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import MessageEditContainer from './message_edit'


class ProfileMessage extends React.Component{
    constructor(props){
        super(props);
        this.state={text:'Hi'}
    }

    update(field) {
        return (e) => {
          this.setState({[text]: e.target.value});
        };
      }
   
    render(){ 
    
    
        return(
            <div>
                <p>
                    {this.state.text}
                </p>
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    
    return(
        {  
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
          
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMessage)
