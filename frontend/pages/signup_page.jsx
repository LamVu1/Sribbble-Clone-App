import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { signup } from '../reducers/session/session_actions';
import {clearErrors} from '../reducers/errors/errors_action';

class SignupPage extends React.Component {
  
  constructor(props){
      super(props);
      this.state = { username: '',
                     password: '',
                     email: '',
                     location: '',
                     profile_picture: null
                   };
      this.preview='profile.png';
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFile = this.handleFile.bind(this);
      this.removeImage = this.removeImage.bind(this);

  }

  handleUpdate(field){
    return(e => this.setState({[field]: e.currentTarget.value}))
  }

  handleFile(e){
    e.stopPropagation()
    this.setState({profile_picture: e.currentTarget.files[0]});
    var file= e.currentTarget.files[0];
    this.preview = URL.createObjectURL(file)
  }

  removeImage(e){
    e.preventDefault()
    e.stopPropagation()
    this.setState({profile_picture: null});
    document.getElementById("signup-previewimage").value = "";
    this.preview='profile.png';
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData() ;
    formData.append('user[username]', this.state.username);
    formData.append('user[password]', this.state.password);
    formData.append('user[email]', this.state.email);
    formData.append('user[location]', this.state.location);
    formData.append('user[profile_picture]', this.state.profile_picture);
    
    this.props.signup(formData);
  }

  // renderErrors(){
  //     return(
  //         <ul>
  //           {this.props.errors.map((error, i) => (

  //               <li className='errors' key={`error-${i}`}>
                  
  //                 {error}

  //               </li>

  //           ))}
  //         </ul>
  //     );
  // }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  render() {

    return (
      <div className="signup-form-container">
         
          
          <div className="NAV-BAR">
            <a href="https://www.linkedin.com/in/lam-vu-4b49a5117/" target="_blank">
              <i id="linkedin" className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/LamVu1/Sribbble-Clone-App" target="_blank">
              <i id="github" className="fab fa-github"></i>
            </a>
            <a href="https://angel.co/lam-vu-2" target="_blank">
              <i id="angellist" className="fab fa-angellist"></i>
            </a>     
		      </div>
  

          <div className="signup-header-container">
                <div className="signup-header">
                <h2 className="signup-header-head1">JOIN THE SCRIBBLEZ COMMUNITY</h2>
                <h2 className="signup-header-head2">Sign Up</h2>
                </div>
          </div>

          <form onSubmit={this.handleSubmit} className="signup-form-box">
              <div className="signup-form-box-center">
                <div className="signup-form-box-inner">
                  <div className="signup-form">
                      <h2 className="signup-form-h2">Discover the worlds top designers & creatives</h2>
                      <p className="tag">The go-to destination for discovering and connecting with designers and creative talent around the globe.</p>

                      <br/>
                      <label className="signup-label">
                          Username
                      </label>

                      <br/>
                      <input type="text" value={this.state.username} onChange={this.handleUpdate('username')}   className="signup-input"
                      />
                      <p className="tag2">Your Dribbble URL: https://dribbble.com/<strong>USERNAME</strong></p>
                    
                      <br/>
                      <div>
                          <label className="signup-label">Email
                              <br/>
                              <input type="text" value={this.state.email} onChange={this.handleUpdate('email')} className="signup-input"/>
                          </label>
                          <br/>
                          <br/>
                      </div>

                      <label className="signup-label">Password
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.handleUpdate('password')} className="signup-input"/>
                      </label>
                      <p className="tag2">Minimum 6 characters</p>
                      <br/>
                      <label className="signup-label">Location (optional)
                        <br/>
                         <input type="text" value={this.state.location} onChange={this.handleUpdate('location')} className="signup-input"/> 
                      </label>
                      <br/>
                      
                      <input className="session-submit" type="submit" value='Create Account' />
                      
                    </div>
                      <div className="signup-profilepicture">
                        <h1>Add a profile picture</h1>
                          
                          <img className="signup-profilepreview" src={this.preview}/>
                          <div className="signup-btndiv">
                            <button>
                                <input id="signup-previewimage" type="file" placeholder="Upload Image" onChange={this.handleFile}/> 
                                  
                            </button>

                            <button id="remove-btn" onClick={this.removeImage}>Remove Image</button>
                          </div>
                      
                      </div>
                  </div>
              </div>
          </form>
      </div>
    );
  }
}


const mapStateToProps = () => {

  return (
    {
      
        formType: 'Sign Up',
        navLink: <Link to="/login">log in instead</Link>,
    }
  )
};

const mapDispatchToProps = dispatch => {
  
  return (
    {
        signup: (user) => dispatch( signup(user)),
        clearErrors: () => dispatch( clearErrors())
    }
  )
};


export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
