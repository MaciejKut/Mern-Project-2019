import React from 'react';

const PostPage = ({ match }) => (
    <div>
        <h1>Post o id {match.params.id}</h1>
    </div>
);

export default PostPage;