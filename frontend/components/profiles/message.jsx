import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import {getUser} from '../../actions/profile_actions';
import {update} from '../../actions/profile_actions';



class ProfileMessage extends React.Component{
    constructor(props){
        super(props);
        this.state={message: this.props.message}
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.showform = false;
    }

    componentDidMount(){
        this.props.getUser(this.props.id);
    }
   

    handleUpdate(){
        return(e=>this.setState({message: e.target.value}))
    }

    handleSubmit(e){        
        e.preventDefault();
        const message = {message: this.state.message, id: this.props.id }
        this.props.update(message)
        this.handleButton()
    }

    handleButton(){
        let f = document.getElementsByClassName('Profile-Message-Form')
        let message = document.getElementsByClassName('Profile-Message')
        let btn = document.getElementsByClassName("Profile-Message-Btn")
        
        if(this.showform){
            f[0].style.display = "none";
            message[0].style.display = "block";
            btn[0].style.display = "block";
            btn[0].innerHTML = "Edit Message"
            this.showform=false;
        }
        else{
            f[0].style.display = "block";
            message[0].style.display = "none";
            btn[0].innerHTML = "Cancel"
            this.showform = true;

        }
    }
   
    render(){ 

        let form = <form className="Profile-Message-Form" onSubmit={this.handleSubmit} style={{display: 'none'}}>
        <textarea value={this.state.message} onChange={this.handleUpdate()}></textarea>
        <input type="submit"/>
        </form>

        let message = <p className="Profile-Message" style={{display: 'block'}}>{this.state.message}</p>
    
        
    
        return(
            <div className="Profile-Message-Container">
                <button className="Profile-Message-Btn" onClick={this.handleButton}>
                    Edit Message
                </button>
                {form}
                {message}
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
            update: (message)=>dispatch(update(message)),
            getUser: (userId)=> dispatch( getUser(userId))
        }
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileMessage));
