import React from 'react';
import closeModal from '../../actions/modal_action';
import PostIndexContainer from '../posts/post_index_container';
import PostDetail from '../posts/post_detail';


function Modal({ modal, closeModal, data }){
   let component;
   switch(modal){
    case 'PostDetail':
        component = <div>
                        <div onClick={()=>closeModal()} className="close-x">X</div>
                        <PostDetail post={data}/>
                        
                    </div>
        break;
    default:
        return null;
   }

   return(
    <div className="modal-background" onClick={closeModal}>
    <div className="modal-child" onClick={e => e.stopPropagation()}>
      { component }
    </div>
  </div>
   )
}

export default Modal
