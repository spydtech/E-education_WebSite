import React from 'react';
import ImgUrl from '../assets/image.png'
import Features from './Features';
import Features2 from './Features2';
const HeroSection = () => {
  return (
    <>
      <div className="">
        <div
          className="relative h-[572px] text-[#FFFFFF] bg-cover bg-center text-center mx-auto "
          style={{ backgroundImage: `url(${ImgUrl})` }}
        >
          <div className="bg-white bg-opacity-5 p-6 rounded-lg flex flex-col justify-center items-center h-full ">
            <h2 className="text-4xl absolute top-36  font-medium lg:text-6xl">
              The Features of Learning
            </h2>

            <p className="mt-16 max-w-lg pt-20 text-wrap hover:underline">
              In a world where information is at our fingertips, E-education offers limitless opportunities for personal and professional growth. Embrace the convenience and flexibility of online learning and unlock your potential from anywhere in the world.
            </p>
            <a
              href="#"
              className="inline-block w-[300px]  h-[60px] text-lg font-medium text-gray-100 bg-[#0098F1] rounded-lg p-2 mt-20 py-4 hover:bg-[#f6ac14] hover:shadow-md md:w-48"
            >
              Join the Courses
            </a>
          </div>
        </div>
        <h1 className=" relative text-4xl  text-center py-20">
          We Introduce The <span className=' bg-gradient-to-r bg-clip-text from-[#f6ac14]  to-[#0098f1]  text-transparent'>Advanced</span> Features
        </h1>

        <div className="flex flex-col sm:flex-row text-white gap-10 justify-center items-center sm:items-stretch">
          <div className="relative border-l-8 border-l-[#f6ac14] group w-full sm:w-[501px] h-auto sm:h-[477px] bg-[#0098f1] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[#f6ac14] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
            <div className="relative z-10  ">
              <h1 className="text-2xl font-bold pb-8 h-16 pt-4 pl-4 relative w-60  overflow-hidden " style={{ borderBottomRightRadius: '1.0rem' }}>
                <span className="relative z-10 pt-4 ">Feeds</span>
                <div className="absolute  top-0 left-0 h-full bg-[#0098f1] transform -translate-x-full group-hover:translate-x-0  transition-transform duration-500 ease-in-out w-full"></div>
              </h1>
              <p className="mt-2 px-[1.25rem] text-white">
                Stay up-to-date with the latest trends, insights, and updates in the world of E-education through our feeds feature. Explore a curated collection of articles, blog posts, videos, and news related to online learning, educational technology, and more. Whether you're looking for tips on effective study strategies, industry trends, or inspiring success stories, our feeds have you covered. Join the conversation, share your thoughts, and connect with a community of learners passionate about E-education.
              </p>
            </div>
          </div>
          <div className="relative border-l-8 border-l-[#f6ac14] group w-full sm:w-[501px] h-auto sm:h-[477px] bg-[#0098f1] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[#f6ac14] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
            <div className="relative z-10 ">
              <h1 className="text-2xl pb-8 h-16 font-bold pt-4 pl-4 relative w-60 overflow-hidden " style={{ borderBottomRightRadius: '1.0rem' }}>
                <span className="relative z-10">Ask Me Question</span>
                <div className="absolute top-0 left-0 h-full bg-[#0098f1] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out w-full"></div>
              </h1>
              <p className="mt-2 px-[1.25rem] text-white">
                Got a burning question about E-education? Do not worry, we have got you covered! Our Ask Me a Question feature allows you to get instant answers to your queries from our team of experts. Whether you need advice on choosing the right course, tips for staying motivated, or guidance on navigating the world of online learning, simply submit your question and let our knowledgeable team provide you with the answers you need. With Ask Me a Question, help is just a click away, so dont hesitate to reach out and make the most of your E-education journey.
              </p>
            </div>
          </div>
        </div>

      </div>
      <Features />
      <Features2 />
    </>

  );
};

export default HeroSection;
