import React from "react";
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

import LandingContainer from '../pages/landing_page';
import SignupPage from '../pages/signup_page';
import SigninPage from '../pages/signin_page';
import Navcontainer from './nav/main_nav_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import CreatePostForm from './posts/create_post_form';
import Modal from './modal/modal';
import AwesomeComponent from './loading';
// import ProfileContainer from './profiles/profile_container';
// import FollowingContainer from './profiles/profile_follow_container';
// import LikeContainer from './profiles/profile_like_container';
import ProfilePage from '../pages/profile_pages';


const App = () => (
  
  <div className="main-div">

      
      <Navcontainer/>
      <Modal/>
      
        < Switch>
        < AuthRoute exact path="/login" component={SigninPage}/>
        < AuthRoute exact path="/signup" component={SignupPage} />
        < Route exact path="/" component={LandingContainer}/>
        < ProtectedRoute exact path='/posts/new' component={CreatePostForm} />
        < Route exact path="/profile/:id" component={ProfilePage}/>
        < Redirect to="/" />
        </Switch>

  </div>
  
  );
  // < Route exact path="/following/:id" component={FollowingContainer}/>
  // < Route exact path="/like/:id" component={LikeContainer}/>

export default App;