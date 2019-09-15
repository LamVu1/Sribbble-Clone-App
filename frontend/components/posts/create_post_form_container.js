import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreatePostForm from './create_post_form';
import { createPost } from '../../actions/posts_actions';



const mapStateToProps = state => {
    return({
        post: {title:"", description:""}
    })
}

const mapDispatchToProps = dispatch => {
    return({
        createPost: (post) => dispatch(createPost(post))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePostForm);