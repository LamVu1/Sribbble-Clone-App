import {OPEN_MODAL, CLOSE_MODAL} from './modal_action';

const INITIAL_STATE = {
    hidden: true
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
        default:
            return oldstate;
    }
};

export default modalReducer;