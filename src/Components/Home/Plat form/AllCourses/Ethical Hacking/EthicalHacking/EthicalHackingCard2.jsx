import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EthicalHackingCard2 = () => {
  const [courseName] = useState("Ethical Hacking"); // Placeholder for course name
  const [coursePrice] = useState(34999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
        <div className="pr-2 md:mb-14 py-14 md:py-0 font">
          <p className="py-4 md:lg:xl:2xl:text-[24px] text-[20px] text-[#101828]  md:py-6  leading-10">
          Master the Art of Ethical Hacking and Secure Your Digital World! Equipping you with cutting-edge techniques and cybersecurity
            expertise, we stand by your side in safeguarding your digital
            assets...
          </p>

          <div className="mt-4">
            <button
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-[#0098f1] rounded-lg md:px-8 group"
            >
              Enroll Now
            </button>
          </div>
        </div>

        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="rounded-full lg:h-[350px] object-cover lg:w-[350px] sm:mx-auto sm:w-4/6 sm:h-4/6 sm:pb-12 lg:pb-0"
            src="https://images.pexels.com/photos/5829726/pexels-photo-5829726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Ethical Hacking Hero Image"
            width={500}
            height={488}
          />
        </div>
      </div>
    </>
  );
};

export default EthicalHackingCard2;
