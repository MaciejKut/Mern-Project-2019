// tutaj wykorzystujemy reducer połącznenie komponentu z Reduxem
import { connect } from 'react-redux';
import { getPosts, getRequest, loadPostRequest } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
    posts: getPosts(state),
    request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostRequest()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
