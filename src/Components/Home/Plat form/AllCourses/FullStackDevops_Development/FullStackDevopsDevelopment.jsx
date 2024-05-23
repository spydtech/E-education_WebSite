import React, { useState, useEffect } from "react";
import Navbar from '../../../../Navbar'
// import Navbar from "../../../../Navbar";
import AboutCourses from "./AboutCourses";
import Community from "./Community/community";
import SuccessStory from "./SuccessStory/successstory";
// import Award from "../Award/Award";
import Delivery_Methods from "./deliverymethods/Delivery_Methods";
import FullStackDevopsDeveloper from "./Developer/FullStackDevopsDeveloper";
import Footer from "../../../footer/Footer";

const images = [
  "https://media.istockphoto.com/id/1161702497/vector/team-of-programmer-concept-with-devops-software-development-practices-methodology-vector.jpg?s=612x612&w=0&k=20&c=5cqLQaudaYaXv3OdYQHjt-F-LhcuOiBhXWtHLMwj4PU=",
  "https://media.istockphoto.com/id/1332535500/vector/devops-engineers-concept.jpg?s=612x612&w=0&k=20&c=6Dwb63z573hZ6qTBg71rMm5popamxDUpVSBjf1v-VhE=",
  "https://media.istockphoto.com/id/1188609656/vector/it-engineering-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=7BjJEhsDe6nf2_et9gUgDmya9SxfvOpoewbKWGq_c0k=",
  "https://media.istockphoto.com/id/1490316279/vector/software-development-programming-coding-people-write-code-settings-and-testing-developing.jpg?s=612x612&w=0&k=20&c=2fQW1Iz3Di-TpuVYo2_6izYHkYgDMrqEwZWf1Fn5pz4=",
  "https://media.istockphoto.com/id/1369014405/vector/programmer-working-modern-flat-concept-for-web-banner-design-developer-creates-software-and.jpg?s=612x612&w=0&k=20&c=plT6sJxmljrSNO3D_mwcyWemBtisgK9iEFtLBNJ_6-0=",
];

const FullStackDevopsDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  return (
    <>
      <Navbar />
      <div className="w-full bg-[#14213d] md:pl-28 py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-8xl mx-auto">
        <div className="font-l">
          <span className="text-sm font-semibold tracking-wide text-white uppercase sm:text-base lg:text-sm xl:text-base">
            Explore Full Stack DevOps Course
          </span>
          <h3 className="mt-1 text-4xl font-lora font-extrabold leading-10 tracking-tight text-[#25a244] sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            Master Full Stack DevOps
          </h3>
          <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Elevate your technical skills with comprehensive courses focused on
            full stack DevOps development. Master CI/CD, Kubernetes, Docker,
            AWS, and more, covering both front-end and back-end technologies.
            Develop expertise in building scalable, automated environments and
            position yourself for success as a full stack DevOps developer.
          </p>
          <p className="text-base md:text-lg text-white my-4 md:my-6">
            Our courses empower you to dive deep into full stack DevOps
            technologies. Develop practical skills and stand out in a
            competitive job market. Start your full stack DevOps journey today.
          </p>
          <button className="bg-green-400 text-white font-medium py-2 px-4 rounded transition-all hover:bg-green-700 active:scale-95">
            Enroll Now
          </button>
          <div className="py-4">12,345 already enrolled</div>
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
      <FullStackDevopsDeveloper />
      <AboutCourses />
      <Delivery_Methods />
      <Community />
      {/* <Award /> */}
      <SuccessStory />
      <Footer />
    </>
  );
};

export default FullStackDevopsDevelopment;
