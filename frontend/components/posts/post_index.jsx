import React from 'react';
import PostIndexItem from '../posts/post_index_item';


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class PostIndex extends React.Component{
    
    constructor(props) {
        super(props);
        
    }
    
     
    render(){
        
        let posts = this.props.posts.map((post, idx)=>
            {
                return(
                    
                    <PostIndexItem
                        key= {idx}
                        post={post}
                        
                    />

                )
            }
        )

        return(
            <div>
                
                <ul className="Post-Index">
                    
                    {posts}

                </ul>

            </div>
        )
        
    }
}


export default connect(null, null)(PostIndex)

