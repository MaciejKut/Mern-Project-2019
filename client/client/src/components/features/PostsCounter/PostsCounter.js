import React from 'react';
import { PropTypes } from 'prop-types';
class PostsCounter extends React.Component {
    componentDidMount() {
        const { loadPosts } = this.props;
        loadPosts();

    }
    render() {
        const { posts } = this.props;

        return (
            <div>
                {posts.length > 0 ? 'No of posts ' + posts.length : 'No posts'}
            </div>
        );
    }
};

PostsCounter.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
    loadPosts: PropTypes.func.isRequired,
}
export default PostsCounter;