import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className=" lg:pl-20  w-5/6">
        <div className="sm:text-xl text-[#0098F1]  lg:text-4xl font-bold text-2xl ">
          About this Course
        </div>
        <div className="pt-4 w-full text-[#0098F1] text-base lg:text-lg font">
          Mastering MEAN Stack Development involves becoming proficient in all
          aspects of the MEAN stack, which includes MongoDB, Express.js,
          Angular, and Node.js. This comprehensive skill set allows developers
          to handle both the front-end and back-end of web applications. Here's
          a breakdown of what it entails:
        </div>          
        <div className="gap-4 leading-2 pb-">
          <div className="mt-1 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl pb-2 lg:text-2xl font-bold">
            Front-End Development
          </div>
          <div className="text-[#0098F1] leading-2 lg:text-lg text-base">
            <span className="mt-3  text-[#F6AC14] sm:mt-5 text-lg font-medium">
              Angular:
            </span>{" "}
            Expertise in Angular is crucial for creating dynamic, single-page
            applications with robust user interfaces and efficient performance.
          </div>
          <div className="text-[#0098F1] leading-2 lg:text-lg text-base">
            <span className="mt-3  text-[#F6AC14] sm:mt-5 text-lg font-medium">
              HTML/CSS:
            </span>{" "}
            Mastery of HTML and CSS is essential for structuring web pages and
            applying styles to create visually appealing and responsive designs.
          </div>
          <div className="text-[#0098F1]  leading-2 lg:text-lg text-base">
            <span className="mt-3 text-lg font-medium text-[#F6AC14] sm:mt-5 ">
              JavaScript/TypeScript:
            </span>{" "}
            A deep understanding of JavaScript and TypeScript is necessary for
            building interactive web applications and enhancing Angular
            development.
          </div>
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl pb-2 lg:text-2xl font-bold">
            Back-End Development
          </div>
          <div className="text-[#0098F1]  leading-2 lg:text-lg text-base">
            <span className="mt-3 text-[#F6AC14] sm:mt-5 text-lg font-medium">
              Node.js:
            </span>{" "}
            Proficiency in Node.js is vital for building scalable server-side
            applications using JavaScript, allowing for seamless integration
            with front-end development.
          </div>
          <div className="text-[#0098F1]  leading-2 lg:text-lg text-base">
            <span className="mt-3 text-[#F6AC14] sm:mt-5 text-lg font-medium">
              Express.js:
            </span>{" "}
            Understanding Express.js is important for creating robust APIs and
            handling HTTP requests efficiently.
          </div>
          <div className="text-[#0098F1] leading-2 lg:text-lg text-base">
            <span className="mt-3   text-[#F6AC14] sm:mt-5 text-lg font-medium">
              Database Management:
            </span>{" "}
            Knowledge of MongoDB and its integration with Node.js is essential
            for managing NoSQL databases and performing CRUD operations.
          </div>
        </div>
        <div className="mt-3  text-[#0098F1] sm:mt-5 sm:text-xl pb-2 lg:text-2xl font-bold">
          What you'll learn
        </div>
        <div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1] lg:text-lg text-base">
              Prepare for the MEAN Stack Development interview
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1] lg:text-lg text-base">
              Learn about MEAN Stack Development including managing access,
              defining organizational structure/policies, configuring network
              security, and analyzing logs.
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1] lg:text-lg text-base">
              Learn the skills needed to be successful in a MEAN Stack
              Development role
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
