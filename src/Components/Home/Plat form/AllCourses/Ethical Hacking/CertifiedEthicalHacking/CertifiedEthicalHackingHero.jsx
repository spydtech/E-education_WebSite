// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
const CertifiedEthicalHackingHero = () => {
  const [courseName] = useState("Certified Ethical Hacker"); // Placeholder for course name
  const [coursePrice] = useState(34999);
  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div>
        <img
          // src="https://thumbs.dreamstime.com/b/ascending-arrow-icons-data-science-292911896.jpg?w=992"
          src="https://i.ytimg.com/vi/V_i3wCtn0qA/maxresdefault.jpg"
          className="w-full object-cover md:h-[500px]"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      </div>
      <div
        className="items-center w-10/12 grid grid-cols-1 md:grid-cols-2 mx-auto overflow-x-hidden lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 md:py-0 font">
          <h1 className="text-3xl font-semibold text-violet-800 xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Master the Art of Ethical Hacking
            </span>{" "}
            and Secure Your Digital World!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Equipping you with cutting-edge techniques and cybersecurity
            expertise, we stand by your side in safeguarding your digital
            assets...
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-violet-500 rounded-lg md:px-8 hover:bg-violet-800 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>

        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 w-full md:w-auto md:max-w-full mx-auto md:mx-0"
            src="https://www.techopedia.com/wp-content/uploads/2023/02/dreamstime_m_123641233-1.jpg"
            alt="Awesome hero page image"
            style={{ maxHeight: "400px", width: "700px" }}
          />
        </div>
      </div>
    </>
  );
};

export default CertifiedEthicalHackingHero;
