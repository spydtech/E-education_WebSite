import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
const About = () => {
  return (
    <>
      <div className=" lg:pl-20  w-5/6"> 
      <div className="fone-bold md:text-5xl font text-2xl text-[#0098F1] font-bold">About this Course</div>
      <div className="pt-4 w-full text-[#0098F1] pb-8 font">
        Mastering JavaScript Full Stack Development involves becoming
          proficient in both front-end and back-end technologies, enabling
          developers to build scalable and dynamic web applications. Here's a
          breakdown of the essential skills:
        </div>
        <div className="py-2 gap-4 pb-8 ">
          <div className="mt-1 font-bold leading-10 tracking-tight text-[#0098F1]   sm:leading-none    sm:text-xl lg:text-2xl font"> Front-End Development</div>
          <div className="  text-[#0098F1] text-base font">
            <span className="mt-3   text-[#F6AC14] text-lg sm:mt-5 font-medium">React.js:</span>  {" "}
             Mastery of React.js is essential for building interactive user
            interfaces and single-page applications, leveraging component-based
            architecture.
          </div>
          <div className="  text-[#0098F1] text-base font">
            <span className="mt-3 text-xl  text-[#F6AC14] sm:mt-5 font-medium "> HTML/CSS:</span>{" "}
            Proficiency in HTML and CSS is necessary for structuring web pages
            and styling them to create visually appealing designs.
          </div>
          <div className="  text-[#0098F1] text-base font">
            <span className="mt-3 text-xl font-lg text-[#F6AC14] sm:mt-5 font-medium ">JavaScript:</span>{" "}
            A strong understanding of JavaScript is fundamental for implementing
            client-side logic and enhancing user experiences.
          </div>
        </div>
        <div className="py-2 gap-4 pb-8 ">
          <div className="mt-1 font-bold leading-10 tracking-tight ] sm:leading-none sm:text-xl lg:text-2xl font text-[#0098F1]"> Back-End Development:</div>
          <div className="  text-[#0098F1] text-base font">
            <span className="mt-3 text-xl  text-[#F6AC14] sm:mt-5 font-medium font"> Node.js:
            </span>{" "}
            Proficiency in Node.js is crucial for building scalable server-side
            applications using JavaScript, facilitating seamless communication
            between the front-end and back-end.
            <div className="  text-[#0098F1] lg:text-lg font"> <span className="mt-3  text-xl text-[#F6AC14] sm:mt-5  font-medium"> Express.js:
            </span>{" "}
            Understanding Express.js is essential for creating robust APIs and
            handling HTTP requests efficiently in Node.js applications.
            </div>{" "}
          </div>
          <div className="  text-[#0098F1] lg:text-lg font ">
            <span className="mt-3  text-lg text-[#F6AC14] sm:mt-5 font-medium font">   Database Management:
            </span>{" "}
            Knowledge of databases like MongoDB or SQL databases and their
            integration with Node.js is essential for managing data and
            performing CRUD operations.
          </div>
        </div>
        <div className="mt-3 font-extrabold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">What you'll learn</div>
        <div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]" />
            </div>
            <div className="text-base  text-[#0098F1] md:text-lg font" >
            Master the skills needed for JavaScript Full Stack Development.
              </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]" />
            </div>
            <div className=" text-base  text-[#0098F1] md:text-lg font">
         
            Build scalable and dynamic web applications from scratch.
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="  text-base  text-[#0098F1] md:text-lg font">
              Gain proficiency in both front-end and back-end technologies for
              comprehensive development expertise.
            </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default About;




