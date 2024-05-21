import React, { useState, useEffect } from "react";
import Navbar from "../../../../Navbar";
import AboutCourses from "./AboutCourses";
import Community from "../../../Community/community";
import SuccessStory from "../../../SuccessStory/successstory";
import Award from "../../../Award/Award";
import Footer from "../../../footer/Footer";
// import FullStackCard from "./FullStackCard";
import WebDeveloper from "./Web_Development/WebDeveloper";
import Delivery_Methods from "./deliverymethods/Delivery_Methods";
const images = [
  "https://www.cdmi.in/courses@2x/full-stack.webp",
  "https://www.weblineindia.com/wp-content/uploads/2017/03/full-stack-development-by-weblineindia-2.jpg",
  "https://images.saymedia-content.com/.image/t_share/MTc0NTEwODM4NTk2NzczODc4/full-stack-web-development-are-you-a-game-for-this.jpg",
];
const ParticularFullStack = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  //   }, 3000); // Change the time interval here (in milliseconds) for auto-sliding

  //   return () => clearInterval(interval);
  // }, [currentSlide]);
  return (
    <>
      <Navbar />
      <div className="w-full md:pl-28 py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-8xl mx-auto">
        <div>
          <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
            Explore Full Stack Web Development
          </span>
          <h3 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            Master Full Stack Web Development
          </h3>
          <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Accelerate your tech skills with comprehensive courses designed to
            cover front-end and back-end development. Gain expertise in
            JavaScript frameworks, databases, server-side scripting, and more.
            Prepare yourself for success as a full stack developer.
          </p>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
            Our courses empower you to dive deep into full stack technologies.
            Develop practical skills and stand out in a competitive job market.
            Start your full stack journey today.
          </p>
          <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
            Eroll Now
          </button>
          <div className="py-4">11,095 already enrolled</div>
        </div>
        <div className="relative pl-12">
         
          <img
            className="h-[300px] w-[500px]"
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
          />
          {/* <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
      <svg
        className="absolute top-0 hidden origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden"
        width={640}
        height={784}
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern
            id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
            x={118}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          y={72}
          width={640}
          height={640}
          className="text-gray-50"
          fill="currentColor"
        />
        <rect
          x={118}
          width={404}
          height={784}
          fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
        />
      </svg>
      <div className="relative justify-end hidden w-full lg:flex">
        <div className="flex justify-end inline-block p-8 pr-8 text-base leading-relaxed text-blue-400 bg-indigo-900 rounded-lg shadow-lg xl:text-lg xl:pr-16">
          <pre>
            <span className="text-blue-100">// Create a Web page</span>
            {"\n"}$tenant = Tenant::create();{"\n"}$tenant-&gt;createDomain([
            {"\n"}
            {"  "}'domain' =&gt; 'acme.com',{"\n"}]);{"\n"}
            {"\n"}
            <span className="text-blue-100">
              // Write your  Web page like you're used to
            </span>
            {"\n"}Order::where('status', 'shipped')-&gt;get();{"\n"}
            Cache::get('order_count');{"\n"}asset('logo.png');{"\n"}dispatch(new
            SendOrderCreatedMail);
          </pre>
        </div>
      </div>
    </div> */}

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

   
      <WebDeveloper />
      <AboutCourses />
      <Delivery_Methods />
      <Community />
      {/* <Award /> */}
      <SuccessStory />
      <Footer />
    </>
  );
};

export default ParticularFullStack;
