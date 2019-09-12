import React from 'react';
import { Link } from 'react-router-dom';
class SignupForm
 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
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

        <form onSubmit={this.handleSubmit} className="login-form-box">
         <div className="login-form-box-inner">
          <div className="login-form">
            <h2 className="signup-form-h2">Discover the worlds top designers & creatives</h2>
            <p className="p-tag">The go-to destination for discovering and connecting with designers and creative talent around the globe.</p>
          {this.renderErrors()}
            <br/>
            <label>Username
              <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.handleUpdate('username')}
                className="login-input"
              />
              <p>Your Dribbble URL: https://dribbble.com/USERNAME</p>
            </label>
            <br/>
            <div>
             <label>email:
               <br/>
            <input type="text" value={this.state.email}
                onChange={this.handleUpdate('email')}
                className="login-input"/>
            </label>
            </div>
            <label>Password
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.handleUpdate('password')}
                className="login-input"
              />
            </label>
            <p>Minimum 6 characters</p>
            <br/>
            <input className="session-submit" type="submit" value='Create Account' />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
