import React from 'react';
import Avatar from './Avatar';

const Post = ({ name, message, timestamp, image, text, video, feeling, taggedUsers }) => {
  return (
    <div className="bg-white p-4 mb-4 border rounded-md">
      {/* Avatar profile (placeholder) */}
      <div className="flex items-center mb-2">
        <Avatar src="avatar.jpg" alt="User Avatar" />
       
        <span className="font-semibold">{name}</span>
        <span className="font-semibold">{timestamp}</span>
      </div>
      {/* Post content */}
      <p className="mb-2">{message}</p>
      {image && (
        <img src={URL.createObjectURL(image)} alt="Post Image" className="mb-2" />
      )}
      {video && (
        <video controls src={URL.createObjectURL(video)} className="mb-2"></video>
      )}
      {feeling && <p className="italic mb-2">Feeling/Activity: {feeling}</p>}
      {taggedUsers && taggedUsers.length > 0 && (
        <p className="italic mb-2">
          Tagged: {taggedUsers.map((user) => user.name).join(', ')}
        </p>
      )}
    </div>
  );
};

export default Post;
