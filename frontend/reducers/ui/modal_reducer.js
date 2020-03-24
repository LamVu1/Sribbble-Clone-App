import {OPEN_MODAL, CLOSE_MODAL} from './modal_action';
import { TOGGLE_LOADER } from './loader_action';

const INITIAL_STATE = {
    hidden: true,
    loader: false   
};


const modalReducer = (oldstate=INITIAL_STATE, action)=>{
    Object.freeze(oldstate);

    switch(action.type){
        case OPEN_MODAL:
            return {
                ...oldstate,
                hidden: !oldstate.hidden,
                data: action.data}
        case CLOSE_MODAL:
            return{
                ...oldstate,
                hidden: !oldstate.hidden
            };
        case TOGGLE_LOADER:
            return{
                ...oldstate,
                loader: !oldstate.loader
              }
        default:
            return oldstate;
    }
};

export default modalReducer;