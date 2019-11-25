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
import Modal from './modal/modal_container';
import AwesomeComponent from './loading';
import ProfileContainer from './profiles/profile_container';
import FollowingContainer from './profiles/profile_follow_container';
import LikeContainer from './profiles/profile_like_container';


const App = () => (
  
  <div className="main-div">

      <Modal/>
      
      <Navcontainer/>
      
        < Switch>
        < AuthRoute exact path="/login" component={SignInFormContainer}/>
        < AuthRoute exact path="/signup" component={SignUpFormContainer} />
        < Route exact path="/" component={LandingContainer}/>
        < Route exact path="/following/:id" component={FollowingContainer}/>
        < Route exact path="/profile/:id" component={ProfileContainer}/>
        < Route exact path="/like/:id" component={LikeContainer}/>
        < ProtectedRoute exact path='/posts/new' component={CreatePostFormContainer} />
        < Redirect to="/" />
        </Switch>

  </div>
  
);

export default App;