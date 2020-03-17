// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import LikeIndex from './like_index';
// import {createLike, deleteLike, fetchLikes} from '../../reducers/likes/likes_action';


// const mapStateToProps=(state, ownProps)=>{
  
//     return(
//         {
//             currentuser_id: state.session.id,
//             likes: ownProps.Likes,
//             post_id: ownProps.PostId
//         }
//     )
// }

// const mapDispatchToProps=dispatch=>{
    
//     return(
//         {
//             createLike: (post_id) => dispatch( createLike(post_id)),
//             deleteLike: (id) => dispatch( deleteLike(id)),
//             fetchLikes: (post_id) => dispatch(fetchLikes(post_id))
//         }
//     )
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LikeIndex)