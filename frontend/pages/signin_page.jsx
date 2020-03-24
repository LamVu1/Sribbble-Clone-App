import React from 'react';
import { Link } from 'react-router-dom';
import Errors from '../components/errors/errors';

import { connect } from 'react-redux';

import { login, clearErrors } from '../reducers/session/session_actions';



class SigninPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={username: '',
                     password: '',};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
  }

  handleUpdate(field){
    return(e => this.setState({[field]: e.currentTarget.value}));
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.signin(user);
  }

  handleDemo(e){
    e.preventDefault();

    let demo = {username:'Demo', password:'password'}
    this.props.signin(demo)
  }

  // renderErrors(){

  //   return(
  //       <ul>
          
  //         {this.props.errors.map((error, i) =>(
             
  //             <li className="errors" key={`error-${i}`}>
  //                 {error}
  //             </li>

  //         ))}

  //       </ul>
  //   );
  // }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  render() {
 
    return (

      <div className="signin-form-container">
          <Errors 
          errors = {this.props.errors}
          />

          <div className="NAV-BAR">
            <a href="https://www.linkedin.com/in/lam-vu-4b49a5117/">
              <i id="linkedin" className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/LamVu1" target="_blank">
              <i id="github" className="fab fa-github"></i>
            </a>
            <a href="https://angel.co/lam-vu-2" target="_blank">
              <i id="angellist" className="fab fa-angellist"></i>
            </a>     
		      </div>
        
          <form onSubmit={this.handleSubmit} className="signin-form-box">
              <Link to='/'>
              <img className='signin-logo' src={window.img2} /></Link>
              <h2 className="signin-form-header">Sign in</h2>
              <div className="signin-form">
                  
                  <br/>
                  <label className="signin-label">Username
                      
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
                  <input className="session-submit" type="submit"  />
                 
                  <button onClick={this.handleDemo} className="signin-demo-btn">Demo Login</button>
                  <p className="signin-redirect-link-cont">
                      <Link className="signin-redirect-link" to="/signup">Not a member? Sign up now</Link>
                  </p>
              
            </div>
        
          </form>

      </div>
    );
  }
  
}



const mapStateToProps = ({ errors }) => {

  return(
      {
        errors: errors.session      
    }
  );

};


const mapDispatchToProps = dispatch => {
    
  return(
      {
        signin: (user) => dispatch( login(user)),
        clearErrors: () => dispatch( clearErrors())
      }
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);
