import React, { useState } from 'react';
import Feed from './Feed';
import PostForm from './PostForm';
import Navbar from "../../Navbar"
import Footer from "./../footer/Footer"
import ProfileCard from './ProfileCard';
import Notification from './Notification';

function PostFeeds() {
    const [posts, setPosts] = useState([]);

    const handlePostSubmit = (postData) => {
      setPosts([...posts, postData]);
    };
  return (
    <>
    <Navbar />
    <div className="flex bg-[#d6d3d1]">
    <div className='text-center pt-5'>
     
      <ProfileCard />
    </div>
     <div className="container mx-auto mt-8">
    <PostForm onSubmit={handlePostSubmit} />
    <Feed posts={posts} />
  </div>
  <div className='text-center pt-10 ' >
    <h1 className='text-xl'>Updates</h1>
    <Notification />
  </div>
    </div>
   
  <Footer />
    </>
   
  )
}

export default PostFeeds