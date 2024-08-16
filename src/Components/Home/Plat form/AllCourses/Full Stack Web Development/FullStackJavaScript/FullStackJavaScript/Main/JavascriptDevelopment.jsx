import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this import for navigation
import Navbar from "../../../../../../../Navbar";
import AboutCourses from "./AboutCourses";
import Community from "../Community/community";
import SuccessStory from "../SuccessStory/successstory";
import Footer from "../../../../../../footer/Footer";
import heroImage from '../../../../../../../../assetss/fullstackwebdev/hero.png'
// import DeliveryMethods from './../../deliverymethods/Delivery_Methods';
import JavascriptDeveloperSkills from "../Developer/JavascriptDeveloperSkills";

const JavascriptDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [courseName] = useState("Master Full Stack Java Development"); // Moved inside component
  const [coursePrice] = useState(199); // Moved inside component
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="pl-4">
      <div className="w-full flex flex-col p-6 lg:flex-row  items-center justify-center gap-4 md:px-8 lg:px-16 xl:px-32 py-8 ">
        <div className="md:w-3/4 text-center xl:2xl:text-left">
          <h3 className="  text-xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900">
            Master{" "}
            <span className="text-[#F6AC14]">Full Stack</span> JavaScript Programming
          </h3>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600">
          Boost your career by mastering JavaScript, the most popular
            programming language for web development. From front-end to
            back-end, learn everything you need to build dynamic and responsive
            web applications.
          </p>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-700">
          Our courses will guide you through the entire JavaScript ecosystem,
            covering frameworks like React, Node.js, and Express.js. Develop
            practical skills and stand out in a competitive job market. Start
            your JavaScript journey today.
          </p>
          <button
            onClick={handleEnroll}
            className="mt-6 bg-[#0098F1] text-white  md:w-auto py-3 px-6 rounded transition-all hover:bg-[#007acc] active:scale-95 xl:lg:text-2xl xl:lg:w-[280px] xl:lg:h-[80px] md:text-xl"
          >
            Enroll Now
          </button>
          <div className="mt-4 text-gray-600">11,095 already enrolled</div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
      <JavascriptDeveloperSkills />
      <AboutCourses />
      <Community />
      <SuccessStory />
      <Footer />
    </div>
    </>
  );
};

export default JavascriptDevelopment;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Add this import for navigation
// import Navbar from "../../../../../../../Navbar";
// import AboutCourses from "./AboutCourses";
// import Community from "../Community/community";
// import SuccessStory from "../SuccessStory/successstory";
// import Footer from "../../../../../../footer/Footer";

// import Delivery_Methods from "../../deliverymethods/Delivery_Methods";
// import JavascriptDeveloperSkills from "../Developer/JavascriptDeveloperSkills";

// const JavascriptDevelopment = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [courseName] = useState("Master Full Stack Java Development"); // Moved inside component
//   const [coursePrice] = useState(199); // Moved inside component
//   const navigate = useNavigate(); // useNavigate hook for navigation

//   const handleEnroll = () => {
//     // Navigate to the card details page with course details as parameters
//     navigate("/course-details", { state: { courseName, coursePrice } });
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div className="w-full md:pl-28 py-12 flex md:flex-row flex-col items-center justify-center gap-8 max-w-8xl mx-auto">
//         <div className="md:w-[600px] pl-8 ">
//           <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
//             Explore JavaScript Development
//           </span>
//           <h3 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
//             Master JavaScript Programming
//           </h3>
//           <p className="mt-3 text-base text-gray-600 sm:text-xl lg:text-lg xl:text-xl">
//             Boost your career by mastering JavaScript, the most popular
//             programming language for web development. From front-end to
//             back-end, learn everything you need to build dynamic and responsive
//             web applications.
//           </p>
//           <p className="text-base md:text-lg text-gray-700 my-4 md:my-6">
//             Our courses will guide you through the entire JavaScript ecosystem,
//             covering frameworks like React, Node.js, and Express.js. Develop
//             practical skills and stand out in a competitive job market. Start
//             your JavaScript journey today.
//           </p>
//           <button
//             onClick={handleEnroll}
//             className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"
//           >
//             Enroll Now
//           </button>
//           <div className="py-4">11,095 already enrolled</div>
//         </div>
//         <div className="relative pl-12">
//           <img
//             src="https://miro.medium.com/v2/resize:fit:960/1*YfEOtukQSNXUOBcgZjuKLg.png"
//             className="pr-4 h-[350px]"
//           />
//         </div>
//       </div>
//       <JavascriptDeveloperSkills />
//       <AboutCourses />
//       <Delivery_Methods />
//       <Community />
//       <SuccessStory />
//       <Footer />
//     </>
//   );
// };

// export default JavascriptDevelopment;
