import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import {update} from '../../actions/session_actions';



class ProfileMessage extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props.message
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleUpdate(){
        return e=>this.setState(e.target.value)
    }

    handleSubmit(e){
        e.preventDefault();
        let message = {message: this.state, id: this.props.id }
        this.props.update(message)
    }
   
    render(){ 
    
    
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state} onChange={this.handleUpdate()}></textarea>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}


const mapStateToProps=(state, ownProps)=>{
    
    return(
        {   id: ownProps.id,
            message: ownProps.message
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            update: (message)=>dispatch(update(message))
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMessage)
