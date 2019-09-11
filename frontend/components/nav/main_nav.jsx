import React from 'react';
import { Link } from 'react-router-dom';



class Nav extends React.Component {
    constructor(props) {
      super(props);
      
    }

    render(){
    let sessionLinks;
    if(this.props.currentUser){
        sessionLinks = <hgroup className="header-group">
        <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
    </hgroup>
    }else{
        sessionLinks= <nav className="main-nav">
        <Link to="/login">Sign in</Link>
        <Link to="/signup">Sign Up</Link>
         </nav>
    }

    return(
    <div>
        {sessionLinks}
    </div>
        )
    }
}



export default Nav;
