import React from 'react';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.logout();
    }

    handleUpload(){
        this.props.history.push('/posts/new')
    }
    // <Link to="/posts/new" style={{ textDecoration: 'none', color: '#999' }}> Upload</Link>

    render(){
    let sessionLinks;
    if(this.props.currentUser)
        {
            sessionLinks = 
                <hgroup className="nav-group">
                    <h2 className="nav-name">
                        Hello, {this.props.currentUser.username}!
                    </h2>
                    <button className="Upload-btn" onClick={this.handleUpload}>
                        
                         <Link to="/posts/new" style={{ textDecoration: 'none', color: '#999' }}><i className="fas fa-cloud-upload-alt"></i> Upload</Link>

                    </button>
                    <button className="nav-logout-btn" onClick={this.handleSubmit}>
                        Log Out
                    </button>
                </hgroup>
        }

    else
        {
            sessionLinks= 
            <nav className="nav-group">
                <Link to="/login" className="nav-signin">
                    Sign In
                </Link>
                <button className="nav-signup-btn">
                    <Link to="/signup"  style={{ textDecoration: 'none', color: '#999' }}className="main-nav-signup">
                        Sign Up
                    </Link>
                </button>
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
