import { connect } from 'react-redux';
import PostDetail from '../posts/post_detail';

const mapStateToProps = (state, post)=>{
    return({
     Post: post
    })
  }
  const mapDispatchToProps = dispatch => {
    
    return ({})
   
  };
  
  export default connect(
  mapStateToProps,  mapDispatchToProps
  )(PostDetail);
  