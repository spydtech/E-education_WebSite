import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CertifiedEthicalHackingHero = () => {
  const [courseName] = useState("Certified Ethical Hacker");
  const [coursePrice] = useState(34999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
        <div className="w-auto h-auto pr-10 md:mb-14 py-14 font md:py-0 mx-auto">
          {/* <h1 className="text-3xl font-semibold text-violet-800 xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Master the Art of Ethical Hacking
            </span>{" "}
            and Secure Your Digital World!
          </h1> */}
          <p className="py-4 text-lg text-gray-500 md:py-6 leading-10">
            Equipping you with cutting-edge techniques and cybersecurity
            expertise, we stand by your side in safeguarding your digital
            assets...
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
            src="https://www.techopedia.com/wp-content/uploads/2023/02/dreamstime_m_123641233-1.jpg"
            alt="Certified Ethical Hacker Hero Image"
            width={500}
            height={488}
            style={{ maxHeight: "400px", width: "700px" }}
          />
        </div>
      </div>
    </>
  );
};

export default CertifiedEthicalHackingHero;
