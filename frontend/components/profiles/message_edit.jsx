import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';


class MessageEdit extends React.Component{
    constructor(props){
        super(props);
        this.state={text:'Hi'}
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleUpdate(){
        return e=>this.setState({[text]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state)
    }
   
    render(){   
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.text} onChange={this.handleUpdate()}></textarea>
                    <input type="submit"/>
                </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(MessageEdit)
