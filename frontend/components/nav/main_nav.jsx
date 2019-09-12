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
    </hgroup>}
    else if(window.location.href==="http://localhost:3000/#/login"){
        sessionLinks
    }
    else{
        sessionLinks= <nav className="main-nav">
        <Link to="/login" className="main-nav-signin">Sign in</Link>
        <button className="nav-signup-btn">
        <Link to="/signup" className="main-nav-signup">Sign Up</Link>
        </button>
         </nav>
    }

    return(
    <div className="Main-nav">
        <div  className='main-nav-logo-cont'>
        <Link to='/'>
          <img src={window.img2} className='main-nav-logo'/></Link>
        </div>
        {sessionLinks}
    </div>
        )
    }
}



export default Nav;
