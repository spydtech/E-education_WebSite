import React from 'react';
import Lottie from 'react-lottie';
import Girl from '../../../assets/Home/girl.json';

const Girl1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Girl,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="md:mb-8"> {/* Set margin for medium and large screens */}
      <div className="md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px]"> {/* Set height and width for medium and large screens */}
        <Lottie 
          options={defaultOptions}
        />
      </div>
    </div>
  );
};

export default Girl1;
