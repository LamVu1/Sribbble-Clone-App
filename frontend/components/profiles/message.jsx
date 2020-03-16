import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';
import {getUser} from '../../reducers/profile/profile_actions';
import {update} from '../../reducers/profile/profile_actions';



class ProfileMessage extends React.Component{
    constructor(props){
        super(props);
        this.state={message: 'Hello'}
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.showform = false;
    }

    componentDidMount(){
        this.props.getUser(this.props.id).then(user=>{
           if(user.user.message===null){return}
           else{
            this.setState({message: user.user.message})
            }
        })
        console.log(this.state.message)
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

        let form = <form className="Profile-Message-Form" onSubmit={this.handleSubmit} style={{display: 'none'}}>
        <textarea value={this.state.message} onChange={this.handleUpdate()} maxlength="200"></textarea>
        <button>
        <input type="submit"/>
        </button>
        </form>

        let message = <p className="Profile-Message" style={{display: 'block'}}>{this.state.message}</p>
        
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
        {   
            id: ownProps.id,        
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
