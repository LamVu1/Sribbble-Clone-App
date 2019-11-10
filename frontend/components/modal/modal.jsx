import React from 'react';
import closeModal from '../../actions/modal_action';
import PostIndexContainer from '../posts/post_index_container';
import PostDetailContainer from '../posts/post_detail_container';


function Modal({ modal, closeModal, data })
    {
      let component;
      switch(modal)
      {
        case 'PostDetail':
        component = <div className="modal-child" onClick={()=>closeModal()}>
                        <div className="PostContainer" onClick={ e => e.stopPropagation()}>
                          <PostDetailContainer 
                             post={data}
                           />
                        </div>
                        
                         <div onClick={()=>closeModal()} className="close-x"><i className="fas fa-times"></i></div>
                    </div>
        break;
        default:
        return null;
      }
      // e => e.stopPropagation()
        // <div className="modal-child" onClick={closeModal}>
      return(
          <div className="modal-background">
                  { component }
            
          </div>
            )
}

export default Modal
