// import { connect } from 'react-redux';
// import PostDetail from '../posts/post_detail';
// import {deletePost} from '../../reducers/posts/posts_actions';
// import {withRouter} from 'react-router-dom';
// import {fetchFollows} from '../../reducers/follows/follows_action';
// import {fetchLikes} from '../../reducers/likes/likes_action';
// import {closeModal} from '../../reducers/ui/modal_action';
// import {updatePost} from '../../reducers/posts/posts_actions';


// const mapStateToProps = (state, post)=>{

//     return(
//       {
//           Post: post,
//           follows: Object.values(state.entities.follows),
//           likes: Object.values(state.entities.likes),
//           user_id: state.session.id
//       }
//     )
// };

// const mapDispatchToProps = dispatch => {
  
//     return(
//       {
//           deletePost: (id)=>dispatch(deletePost(id)),
//           closeModal: () => dispatch( closeModal()),
//           updatePost: (post)=>dispatch(updatePost(post))

//       }
//     )
// };
  
// export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
  