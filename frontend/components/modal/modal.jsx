import React from 'react';
import {closeModal} from '../../reducers/ui/modal_action';
import PostDetail from '../posts/post_detail';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


{/* <div className="PostContainer" onClick={ e => e.stopPropagation()}>
  <PostDetailContainer 
     post={data}
   />
</div>

 <div onClick={()=>closeModal()} className="close-x"><i className="fas fa-times"></i></div> */}

class Modal extends React.Component{
    constructor(){
        super();
    }

    render(){
        let {ui, closeModal, post} = this.props;
        let content;
        
        if(ui){
            content = 
            null
        }
       else{
           content=
           <div className='modal-background' scroll='no'>
               <div className='modal-child' scroll='no' onClick={closeModal}>
                   <div onClick={ e => e.stopPropagation()}>
                       
                    <PostDetail post={post}/>
                   </div>
               </div>
               <div onClick={()=>closeModal()} className="close-x">
                   <i className="fas fa-times"></i>
                </div>
           </div>
        
       }

        return(
            <div>
                {content}
            </div>
            

        )

    }
}




const mapStateToProps=state=>{
    
    return(
        {
           ui: state.ui.modal.hidden,
           post: state.ui.modal.data
        }
    )
}

const mapDispatchToProps=dispatch=>{
    return(
        {
            closeModal: ()=>dispatch(closeModal())
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)




