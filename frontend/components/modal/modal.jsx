import React from 'react';


const Modal=({ modal, closeModal })=>{
    let component;
   switch(modal){
    case    something:
        component = < />
        break;
    default:
        return null;
   }

   return(
       <div onClick={event => event.stopPropagation()}>
           {component}
       </div>
   )
}

export default Modal
