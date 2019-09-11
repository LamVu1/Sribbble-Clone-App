import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SigninForm from './signin_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign In',
    navLink: <Link to="/signup">Sign up now</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: (user) => dispatch(login(user)),
    clearErrors: ()=>dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
