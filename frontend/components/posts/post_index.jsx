import React from 'react';
import PostIndexItem from '../posts/post_index_item';
import { connect } from 'react-redux';


class PostIndex extends React.Component{
    
    constructor(props) {
        super(props);        
    }
    
    
     
    render(){
        let content;
        
        if(this.props.posts !== undefined){
           content = this.props.posts.map((post,idx)=>{
               return(
                   
                <PostIndexItem
                key= {idx}
                post={post}
                
                />

               )
           }
           )
        }
       
            return(
                <div className='Post-Index-Container'>
                
                <ul className="Post-Index">
                    {content}

                </ul>

            </div>
        )
        
    
}

}
export default connect(null, null)(PostIndex)

