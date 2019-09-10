import React from 'react';
import ReactDOM from 'react-dom';
import * as api from './utils/session_api_util';

window.login=api.login;
window.signup=api.signup;
window.signout=api.logout;
document.addEventListener('DOMContentLoaded', ()=>{
    let root = document.getElementById('root');
    ReactDOM.render(<h1>rerereere</h1>, root)
})