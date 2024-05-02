import React, { useState } from 'react';

const Avatar = ({ src, alt }) => {
    return (
      <img
        src={src}
        alt={alt}
        className="w-8 h-8 rounded-full object-cover mr-2"
      />
  )
}

export default Avatar