import React from 'react';
import PostIndexItem from '../posts/post_index_item';


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class PostIndex extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        
    }
    
    // componentDidMount(){
        
    //     if(this.state.posts !==undefined){
    //         this.setState({posts: this.props.posts})
    //     }
        
    // }
     
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
        // let content;
        // debugger
        // if(this.state.posts.length !== 0){
        //     debugger
        //     content = this.state.posts.map((post, idx)=>
        // {
        //     return(
                
        //         <PostIndexItem
        //         key= {idx}
        //         post={post}
                
        //         />
                
        //         )           
        //     }
        //     )
            

        // }
        
        // {content}
            return(
                <div>
                
                <ul className="Post-Index">
                    {content}

                </ul>

            </div>
        )
        
    
}

}
export default connect(null, null)(PostIndex)

