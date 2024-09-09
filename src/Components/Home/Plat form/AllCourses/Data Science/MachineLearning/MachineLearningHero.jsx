// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
const MachineLearningHero = () => {
  const [courseName] = useState("Machine Learning With AI"); // Placeholder for course name
  const [coursePrice] = useState(34999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      {/* first part */}

      <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725874356/image_13_oi7qfs.png")' }}>
  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-center text-white text-[20px] font-medium px-4">
      Discover how Machine Learning can transform using data and algorithms<br/>
       to enable AI to imitate the way that humans learn, gradually improving its accuracy.
    </p>
  </div>
  <div className="absolute inset-0 flex items-end justify-center pb-10">
    <button
      onClick={handleEnroll}
      className="px-6 py-3 text-[20px] font-medium text-white bg-[#0098f1] rounded-xl"
    >
      Enroll Now
    </button>
  </div>
</div>


      {/* Second part */}
    </>
  );
};

export default MachineLearningHero;
