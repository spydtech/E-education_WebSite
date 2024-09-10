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
      {/* <div
        className="h-80 "
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="">
          <p className=" text-white ">
            Master the Art of Ethical Hacking and Secure Your Digital World!
            Equipping you with cutting-edge techniques and cybersecurity
            expertise, we stand by your side in safeguarding your digital
            assets...
          </p>

          <div className="mt-4">
            <button
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-[#0098f1] rounded-lg md:px-8"
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

export default EthicalHackingCard2;
