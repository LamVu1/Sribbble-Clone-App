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

  render() {
    // let email;
    // if(this.props.formType==='Sign Up'){
    //   email =
    //     <div>
    //       <label>email:
    //         <input type="text" value={this.state.email}
    //             onChange={this.handleUpdate('email')}
    //             className="login-input"/>
    //       </label>
    //     </div>
      
    // }
    return (
      <div className="signup-form-container">
        <div className="signup-header">
          <span>JOIN THE SCRIBBLEZ COMMUNITY</span>
        </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
         
          <div className="login-form">
          {this.renderErrors()}
            <br/>
            <label>Username or Email
              <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.handleUpdate('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.handleUpdate('password')}
                className="login-input"
              />
            </label>
            <br/>
            <div>
             <label>email:
            <input type="text" value={this.state.email}
                onChange={this.handleUpdate('email')}
                className="login-input"/>
            </label>
            </div>
            <input className="session-submit" type="submit" value='Create Account' />
            
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
