import React from 'react';
import ReactDOM from 'react-dom';
import * as api from './utils/session_api_util';
import configureStore from './store/store';

window.login=api.login;
window.signup=api.signup;
window.signout=api.logout;
document.addEventListener('DOMContentLoaded', ()=>{
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    let root = document.getElementById('root');
    ReactDOM.render(<h1>React is working</h1>, root)
})