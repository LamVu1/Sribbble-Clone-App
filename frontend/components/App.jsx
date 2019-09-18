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
import SignInFormContainer from './session_form/signin_form_container';
import Navcontainer from './nav/main_nav_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import CreatePostFormContainer from './posts/create_post_form_container';

const App = () => (
  <div className="main-div">
     <Navcontainer />
      {/* <header>
      <Link to="/" className="header-link">
        <h1>Scribbble</h1>
      </Link>
      </header> */}
      

      <Switch>
      <AuthRoute exact path="/login" component={SignInFormContainer}/>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={LandingContainer}/>
      <ProtectedRoute exact path='/posts/new' component={CreatePostFormContainer} />
      <Redirect to="/" />
      </Switch>
  </div>
);

export default App;