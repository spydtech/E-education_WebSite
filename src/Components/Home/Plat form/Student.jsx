import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import HeroStudent from "../../../assets/student/student2.svg";
import Footer from "../footer/Footer";

import StudentCourses from "./StudentCourses";

const images = [
  "https://miro.medium.com/v2/resize:fit:660/1*NRk6YQMA_w-wWcc6JYe7yA.png",
  "https://findit-resources.s3.amazonaws.com/forums/1677056552844.jpg",
  "https://media.istockphoto.com/id/1403523196/photo/focused-female-adult-student-in-headphones-using-laptop.jpg?s=612x612&w=0&k=20&c=Aqz1SYxmeF9WsFWEiX3cZ4-AHJ6ltNRgPX8M98VpwtU=",
];

const Student = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change the time interval here (in milliseconds) for auto-sliding

    return () => clearInterval(interval);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Navbar />
      <div className="w-full  py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-8xl px-4">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
            Kickstart Your Journey
          </span>
          <h3 className="text-4xl md:text-6xl font-lora text-gradient">
            Master Tech Fundamentals
          </h3>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
            Accelerate your tech skills with hands-on courses designed for
            students. Gain expertise in programming, data analysis,
            cybersecurity, and more. Prepare yourself for success in the digital
            world.
          </p>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
            Our courses empower you to dive deep into essential technologies.
            Develop practical skills and stand out in a competitive job market.
            Start your tech journey today.
          </p>
          <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
            Find Your Course
          </button>
        </div>
        <div className=" ">
          {/* <img src={HeroStudent} alt="Hero Student" /> */}
          <div class="lg:inset-y-0 lg:right-0 lg:w-[500px]  border-1  border-gray-500 relative">
            <div className="overflow-hidden">
              <img
                className="md:w-[550px] md:h-[450px] w-[300] h-[300] py-10"
                // src={images[currentSlide]}
                src="https://www.shutterstock.com/image-vector/3d-web-vector-illustrations-online-600nw-2152289507.jpg"
               
              />
            </div>
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-4">
              <button
                onClick={prevSlide}
                className=" text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              >
                &larr;
              </button>
              <button
                onClick={nextSlide}
                className=" text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              >
                &rarr;
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <StudentCourses />
      <Footer />
    </>
  );
};

export default Student;
