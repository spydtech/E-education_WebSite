import React, { useState, useEffect, useContext } from "react";
// import Navbar from "../../../../Navbar";
import AboutCourses from "./AboutCourses";
import Community from "../Community/community";
import SuccessStory from "../SuccessStory/successstory";
import Navber from '../../../../../Navbar';
import Footer from '../../../../footer/Footer'
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../../../../CartContext";
// import Award from "../Award/Award";

// import Footer from "../../../footer/Footer";

import Delivery_Methods from "../deliverymethods/Delivery_Methods";
import MeanStackDeveloper from "../Developer/MeanStackDeveloper";
const images = [
  "https://media.istockphoto.com/id/1446316252/vector/professional-developer-working-in-the-office.jpg?s=612x612&w=0&k=20&c=Fz5rcLEtCyNWtpzf-bttOVrSkqCb8OHhieqYHy-8QRg=",
  "https://media.istockphoto.com/id/1500380376/vector/developers-working.jpg?s=612x612&w=0&k=20&c=7UFwRLVrvJEN7EpLu_-jUU8KYAoB8xc8pyNlprtc9i8=",
  "https://media.istockphoto.com/id/1291641959/vector/hackathon-banner-cartoon-people-at-work-project-writing-code.jpg?s=612x612&w=0&k=20&c=HISYu901-9_AhqFB-5QeeDbH2vZfYmRZInGmrCz5isw=",
  "https://media.istockphoto.com/id/1446316252/vector/professional-developer-working-in-the-office.jpg?s=612x612&w=0&k=20&c=Fz5rcLEtCyNWtpzf-bttOVrSkqCb8OHhieqYHy-8QRg=",
];
const MeanStackDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change the time interval here (in milliseconds) for auto-sliding

    return () => clearInterval(interval);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleEnroll = () => {
    const course = {
      name: 'Mern Stack Development',
      seller: 'SPY D TECH',
      price: 333,
      image: images[currentSlide],
    };
    addToCart(course);
    navigate('/cart'); // Navigate to CartItem page
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  //   }, 3000); // Change the time interval here (in milliseconds) for auto-sliding

  //   return () => clearInterval(interval);
  // }, [currentSlide]);
  return (
    <>
      <Navber />
      {/* <Navbar /> */}
      <div className="w-full bg-[#b8b8ff] md:pl-28 py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-8xl mx-auto">
        <div className="font-l">
          <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
            Explore MEAN Stack Development
          </span>
          <h3 className="mt-1 text-4xl font-lora font-extrabold leading-10 tracking-tight text-violet-800 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            Master MEAN Stack Development
          </h3>
          <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Enhance your tech capabilities with in-depth courses focused on MEAN
            stack development. Master MongoDB, Express.js, Angular, and Node.js,
            covering both front-end and back-end technologies. Develop
            proficiency in building robust, scalable applications and position
            yourself for success as a MEAN stack developer.
          </p>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
            Our courses empower you to dive deep into mean stack technologies.
            Develop practical skills and stand out in a competitive job market.
            Start your mean stack journey today.
          </p>
          <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95" onClick={handleEnroll}>
            Enroll Now
          </button>
          <div className="py-4">11,095 already enrolled</div>
        </div>
        <div className="relative pl-12">
          <img
            className="h-[300px] w-[500px]"
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
          />

          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-8">
            <button
              onClick={prevSlide}
              className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
            >
              &larr;
            </button>
            <button
              onClick={nextSlide}
              className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
      <MeanStackDeveloper />
      <AboutCourses />
      <Delivery_Methods />
      <Community />
      {/* <Award /> */}
      <SuccessStory />
      {/* <Footer /> */}
      <Footer />
    </>
  );
};

export default MeanStackDevelopment;
