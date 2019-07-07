import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import Posts from '../../features/Posts/PostsContainer';
import PostCounter from '../../features/PostsCounter/PostsCounter';

const PostsPage = () => (
    <div>
        <PageTitle>Post list</PageTitle>
        <PostCounter />
        <Posts />
    </div>
);

export default PostsPage;