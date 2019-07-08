import React from 'react';
import { PropTypes } from 'prop-types';
class PostsCounter extends React.Component {
    componentDidMount() {
        const { loadPosts } = this.props;
        loadPosts();

    }
    render() {
        const { numberOfPosts } = this.props;

        return (
            <div>
                <h3>
                    {numberOfPosts > 0 ? 'No of posts ' + numberOfPosts : 'No posts'}
                </h3>

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