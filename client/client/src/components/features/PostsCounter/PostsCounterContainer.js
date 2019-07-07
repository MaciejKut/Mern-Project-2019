import { connect } from 'react-redux';
import { getPosts, getNumberOfPosts, loadPostRequest } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
    posts: getPosts(state),
    numberOfPosts: getNumberOfPosts(state)
})

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostRequest()),

});

export default connect(mapStateToProps, mapDispatchToProps)(PostsCounter);
