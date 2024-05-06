import React from 'react';
import Lottie from 'react-lottie';
import Girl from '../../assets/Home/girl.json'; // import your JSON animation file

const Girl1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Girl, // JSON animation file
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie 
        options={defaultOptions}
        height={400} // adjust height as needed
        width={400} // adjust width as needed
      />
    </div>
  );
};

export default Girl1;
