import React from 'react';
import { Link } from 'react-router-dom';
import {openModal} from '../../reducers/ui/modal_action';
import { connect } from 'react-redux';

class PostIndexItem extends React.Component{
    constructor(){
        super();
    }

    render(){

        
        let {openModal, post} = this.props;
        
        
    return(
        <div className="Post-index-item" onClick={()=> openModal(post)} >
            
            <img src={post.imageURL} />
        </div>

    )
    }
}

const mapDispatchToProps=dispatch=>{
    return(
        {
            openModal: (data)=>dispatch(openModal(data))
        }
    )
}

export default connect(null,mapDispatchToProps)(PostIndexItem);