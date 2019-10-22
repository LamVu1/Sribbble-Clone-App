import React from 'react';
import closeModal from '../../actions/modal_action';
import PostIndexContainer from '../posts/post_index_container';
import PostDetailContainer from '../posts/post_detail_container';


function Modal({ modal, closeModal, data }){
   let component;
   switch(modal){
    case 'PostDetail':
        component = <div className="PostContainer">
                        <div onClick={()=>closeModal()} className="close-x">        
                        x     
                        </div>
                        <PostDetailContainer post={data}/>
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
