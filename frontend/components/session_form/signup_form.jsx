import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
  
  constructor(props){
      super(props);
      this.state = { username: '',
                     password: '',
                     email: '',
                     location: ''
                   };

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(field){
    return(e => this.setState({[field]: e.currentTarget.value}))
  }

  handleSubmit(e){
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  renderErrors(){
      return(
          <ul>
            {this.props.errors.map((error, i) => (

                <li className='errors' key={`error-${i}`}>
                  
                  {error}

                </li>

            ))}
          </ul>
      );
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  render() {

    return (
      <div className="signup-form-container">

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
                      {this.renderErrors()}

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
                  </div>
              </div>
          </form>
      </div>
    );
  }
}

export default SignupForm;
