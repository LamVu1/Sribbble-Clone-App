import React from 'react';
import { Link } from 'react-router-dom';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleUpdate(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signin(user);
  }

  handleDemo(){
    let demo = {username:'Demo', password:'password'}
    this.props.signin(demo)
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
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
      <div className="signin-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <Link to='/'>
          <img className='signin-logo' src={window.img2} /></Link>
        <h2 className="signin-form-header">Sign in</h2>
          <div className="signin-form">
            <br/>
            {this.renderErrors()}
            <label className="signin-label">Username or Email
              <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.handleUpdate('username')}
                className="signin-input"
              />
            </label>
               <br/>
            <label className="signin-label">Password 
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.handleUpdate('password')}
                className="signin-input"
              />
            </label>
            <br/>
           
            <input className="session-submit" type="submit" value={this.props.formType} />
            <button onClick={this.handleDemo} className="signin-demo-btn">Demo Login</button>
           <p className="signin-redirect-link">Not a member?   {this.props.navLink}
             </p> 
          </div>
        </form>
      </div>
    );
  }
}

export default SigninForm;
