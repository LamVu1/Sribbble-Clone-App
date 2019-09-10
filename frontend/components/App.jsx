import React from "react";
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';
import LandingContainer from './Landing/landing_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => (
  <div>
      <header>
      <Link to="/" className="header-link">
        <h1>Scribbble</h1>
      </Link>
    <LandingContainer />
      </header>
      <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </Switch>
  </div>
);

export default App;