import React from 'react';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.logout();
    }

    render(){
    let sessionLinks;
    if(this.props.session)
        {
            sessionLinks = 
                <hgroup className="nav-group">
                    <div className="nav-profile">

                    <h2 className="nav-name">
                        Hello, {this.props.currentUser.username}!
                    </h2>
                    <Link to={`/profile/${this.props.currentUser.id
}`}>
                        <img className="profile-image" src={this.props.currentUser.imageURL}/>
                    
                    </Link>

                    </div>
                   <div className="nav-button">
                             <Link to="/posts/new" style={{ textDecoration: 'none', color: '#999' }}>
                    <button className="Upload-btn">
                             <i className="fas fa-cloud-upload-alt"></i> Upload
                    </button>

                             </Link>                        

                    <button className="nav-logout-btn" onClick={this.handleSubmit}>
                        Log Out
                    </button>
                       
                       </div> 
                </hgroup>
        }

    else
        {
            sessionLinks= 
            <nav className="nav-group">
                <Link to="/login" className="nav-signin">
                    Sign In
                </Link>
               
                <Link to="/signup"  style={{ textDecoration: 'none', color: '#999' }}className="main-nav-signup">
                    <button className="nav-signup-btn">
                        Sign Up
                    </button>
                </Link>
            </nav>
        }

    return(
        <div className="Main-nav">
            
            <div  className='nav-logo-container'>
                <Link to='/'>
                    <img src={window.img2} className='main-nav-logo'/>
                </Link>
            </div>

            {sessionLinks}

        </div>
        )
    }
}



export default Nav;
