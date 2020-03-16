import { combineReducers } from 'redux';

import modal from './modal_reducer';

const ui = combineReducers({
  modal
});

export default ui;