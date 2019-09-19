import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_action';


const modalReducer = (state={}, action)=>{
    switch(action.type){
        case OPEN_MODAL:
            return {modal: action.modal, data: action.data}
        case CLOSE_MODAL:
            return {};
        default:
            return state;
    }
};

export default modalReducer;