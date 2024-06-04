import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../../../../Navbar";
import Navbar from "../../../../../../Navbar";
import AboutCourses from "./AboutCourses";
import Community from "./Community/community";
import SuccessStory from "./SuccessStory/successstory";
import Delivery_Methods from "./deliverymethods/Delivery_Methods";
import FullStackJavaDeveloper from "./Developer/FullStackJavaDeveloper";
import Footer from "../../../../../footer/Footer";

const images = [
  "https://media.istockphoto.com/id/2027690301/vector/backend-development-coding-and-programming-it-specialist-sit-and-write-code-on-a-laptop-for.jpg?s=612x612&w=0&k=20&c=XFAq03A3tCnwvoKzT4mS3oBxlCiKJg1C5JaJVRmbH6I=",
  "https://media.istockphoto.com/id/1248949754/vector/website-app-design-development-technology-software-code-programming-ui-ux-concept.jpg?s=612x612&w=0&k=20&c=j4Qej0zE7XjD8toU04tBur3ofwa_zA6XFK08zwoVbb4=",
  "https://media.istockphoto.com/id/1299578602/vector/website-programming-and-coding-web-development-and-coding-3d-vector-illustrations.jpg?s=612x612&w=0&k=20&c=VF08aPqDFMKqoR2Sz5g6LjzTCECB3-omd0phsEg5boQ=",
  "https://media.istockphoto.com/id/1133790798/vector/business-process-automation-bpa-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=GRwvE4U_Eqg-6nw6LuBe81w3HIDoOu9-7wZUieIkcj4=",
  "https://media.istockphoto.com/id/869155894/vector/online-training.jpg?s=612x612&w=0&k=20&c=E-_RGAHB0a2f6wxlP8KX7NLFG5c5I9O1iY2Ak131_uI=",
];

const FullStackJavaDevelopment = () => {
  const [courseName] = useState(" Testing"); // Placeholder for course name
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-gradient-to-r to-[#8b008b] from-[#9340da] md:pl-28 py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-8xl mx-auto">
        <div className="font-l text-center md:text-left">
          <span className="text-sm font-semibold tracking-wide text-black uppercase sm:text-base lg:text-sm xl:text-base">
            Explore Full Stack Java Course
          </span>
          <h3 className="mt-1 text-4xl md:text-5xl lg:text-6xl text-[#f3a916] font-lora font-extrabold leading-10 tracking-tight">
            Master Full Stack Java Development
          </h3>
          <p className="mt-3 text-base md:text-lg lg:text-base xl:text-lg text-black">
            Elevate your technical skills with comprehensive courses focused on
            full stack Java development. Master Java, Spring Boot, Hibernate,
            RESTful APIs, and more, covering both front-end and back-end
            technologies. Develop expertise in building scalable,
            enterprise-grade applications and position yourself for success as a
            full stack Java developer.
          </p>
          <p className="text-base md:text-lg text-black my-4 md:my-6 ">
            Our courses empower you to dive deep into Fulll stack java
            technologies. Develop practical skills and stand out in a
            competitive job market. Start your full stack Java journey today.
          </p>
          <button
            onClick={handleEnroll}
            className="bg-yellow-400 text-white font-medium py-2 px-4 rounded transition-all hover:bg-[#f3a916] active:scale-95"
          >
            Enroll Now
          </button>
          <div className="py-4">10,299 already enrolled</div>
        </div>
        <div className="relative pl-0 md:pl-12">
          <img
            className="h-[300px] md:h-auto w-full object-cover"
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
      <FullStackJavaDeveloper />
      <AboutCourses />
      <Delivery_Methods />
      <Community />
      {/* <Award /> */}
      <SuccessStory />
      <Footer />
    </>
  );
};

export default FullStackJavaDevelopment;
