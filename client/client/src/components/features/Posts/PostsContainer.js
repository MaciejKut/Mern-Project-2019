// tutaj wykorzystujemy reducer połącznenie komponentu z Reduxem
import { connect } from 'react-redux';
import { getPosts, loadPostRequest } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
    posts: getPosts(state),
})

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostRequest()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
