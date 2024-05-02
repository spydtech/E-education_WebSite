import React, { useState } from 'react';
import Feed from './Feed';
import PostForm from './PostForm';

function PostFeeds() {
    const [posts, setPosts] = useState([]);

    const handlePostSubmit = (postData) => {
      setPosts([...posts, postData]);
    };
  return (
    <div className="container mx-auto mt-8">
    <PostForm onSubmit={handlePostSubmit} />
    <Feed posts={posts} />
  </div>
  )
}

export default PostFeeds