import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';

class LikeIndex extends React.Component{
    constructor(props) {
        super(props);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.found=false;
        this.c
    }

    componentDidMount(){
        this.props.fetchLikes(this.props.PostId) 
        for(let i=0; i<this.props.likes.length;i++){
            if(this.props.likes[i].user_id===this.props.currentUser){
                this.c= this.props.likes[i]
                this.found=true;
                break;
            }
        }
    }
    componentDidUpdate(){
        for(let i=0; i<this.props.likes.length;i++){
            if(this.props.likes[i].user_id===this.props.currentUser){
                this.c= this.props.likes[i]
                this.found=true;
                break;
            }
        }
        
        let b=document.getElementById('Like-Btn')
        if(this.found){
            b.classList.add('selected');
            b.innerHTML=`<i class="fas fa-heart"></i>`+' Liked'

        }else{
            b.classList.add('unselected');
            b.innerHTML=`<i class="fas fa-heart"></i>`+' Like'

        }
    }
  

    handleUpdate(){
  
    let btn = document.getElementById('Like-Btn')
    if(this.found){
        this.props.deleteLike(this.c)
        btn.classList.remove('selected');
        btn.classList.add('unselected');
        this.found=false
    }else{
        const like = {post_id: this.props.PostId}
        this.props.createLike(like)
        btn.classList.remove('unselected');
        btn.classList.add('selected');
    }
    }
     
    render(){
        // let likes = this.props.likes.map((like, idx)=>{
    
        //     return(
        //         <li key={idx}>
        //            <p>{like.username}</p>
        //         </li>
        //     )
        // });
       
       
        
       
        return(
            <div>
                <button id='Like-Btn'onClick={this.handleUpdate}></button>
            </div>
        )
    }
}

export default withRouter(LikeIndex);