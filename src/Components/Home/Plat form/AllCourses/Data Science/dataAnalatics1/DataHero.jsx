import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import student from "../../../../../../assetss/Home/intro_DataScience/student.jpg";
import img1 from '../../../../../../assetss/professionalimages/image13.png';

const DataHero = () => {
  const [courseName] = useState("Data Analytics");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[408px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      ></div>

      <div className="relative z-10 text-center text-white p-6 md:p-10">
        <p className="text-center text-white text-[20px] font-medium px-4 mb-10 max-w-[800px]">
          Dive deep into data analytics, a multifaceted field encompassing data cleaning, visualization, statistical analysis, and predictive modeling. With a focus on practical skills and real-world applications.
        </p>
        <button
          onClick={handleEnroll}
          className="px-6 py-3 text-[20px] font-medium text-white bg-[#0098f1] rounded-xl"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default DataHero;
