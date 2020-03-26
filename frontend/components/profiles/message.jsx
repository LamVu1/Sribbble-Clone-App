import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import {getUser} from '../../reducers/profile/profile_actions';
import {update} from '../../reducers/profile/profile_actions';



class ProfileMessage extends React.Component{
    constructor(props){
        super(props);
        this.state={message: this.props.message}
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.showform = false;
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
            btn[0].innerHTML = "Edit"
            this.showform=false;
        }
        else{
            f[0].style.display = "flex";
            message[0].style.display = "none";
            btn[0].innerHTML = "Cancel"
            this.showform = true;

        }
    }
   
    render(){ 

      
        let form = <form className="Profile-Message-Form" style={{display: 'none'}} onSubmit={this.handleSubmit}>
                        <textarea value={this.state.message} onChange={this.handleUpdate()}></textarea>
                        <input type="submit" name="" id=""/>
                </form>

        let message = <p className="Profile-Message" style={{display: 'block'}}>{this.props.message}</p>
        
        let btn;
        if(this.props.currentUser===this.props.id){
            btn =  <button className="Profile-Message-Btn" onClick={this.handleButton}>
            Edit
        </button>
        }
    
        return(
            <div className="Profile-Message-Container">
                {btn}
                {form}
                {message}
            </div>
        )
    }
}


const mapStateToProps=(state, ownProps)=>{
    
    return(
        {   id: state.entities.profile.id,
            message: state.entities.profile.message,
            currentUser: state.session.id 
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            update: (message)=>dispatch(update(message)),
        }
        )
    }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileMessage));
