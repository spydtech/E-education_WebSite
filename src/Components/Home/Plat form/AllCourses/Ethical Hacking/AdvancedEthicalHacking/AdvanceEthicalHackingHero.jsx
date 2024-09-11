import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdvanceEthicalHackingHero = () => {
  const [courseName] = useState("Advanced Ethical Hacking");
  const [coursePrice] = useState(34999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      {/* <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
        <div className="w-auto h-auto pr-10 md:mb-14 py-14 font md:py-0 mx-auto">
          <p className="py-4 md:lg:xl:2xl:text-[24px] text-[20px] text-[#101828] md:py-6 leading-10">
            Master the art of ethical hacking with advanced techniques and tools to secure your digital assets and stay ahead in the cybersecurity landscape...
          </p>
          <div className="mt-14 lg:md:w-[250px] lg:md:h-[70px] w-auto h-auto justify-center items-center">
            <button
              onClick={handleEnroll}
              className="px-5 md:lg:w-full w-auto font-sans h-full py-3 text-[26px] font-medium text-white bg-[#0098f1] rounded-[22px] md:px-6"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="pb-10 lg:md:w-[400px] lg:md:h-[380px] mx-auto w-auto h-auto overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="rounded-full lg:h-full object-cover lg:w-full sm:mx-auto sm:w-4/6 sm:h-4/6 sm:pb-12 lg:pb-0"
            src="https://images.pexels.com/photos/3766227/pexels-photo-3766227.jpeg"
            alt="Advanced Ethical Hacking Hero Image"
            width={500}
            height={488}
          />
        </div>
      </div> */}
      <div
        className="relative w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725874356/image_13_oi7qfs.png")',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white text-[20px] font-medium px-4">
            Discover how Machine Learning can transform using data and
            algorithms
            <br />
            to enable AI to imitate the way that humans learn, gradually
            improving its accuracy.
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
    </>
  );
};

export default AdvanceEthicalHackingHero;
