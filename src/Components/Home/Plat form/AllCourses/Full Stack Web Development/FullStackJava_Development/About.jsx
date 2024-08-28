import React from "react";
import {MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className=" lg:pl-20  w-5/6">
      <div className=" text-[#0098F1] lg:text-4xl font-bold text-2xl">
          About this Course
        </div>
        <div className="pt-2 lg:text-lg text-base text-[#0098F1] font">
          Mastering Full Stack Java Development involves becoming proficient in
          both front-end and back-end aspects using Java and its associated
          technologies. Here's a breakdown of what it entails:
        </div>        
        <div className="py-2 leading-2 gap-4">
          <div className="mt-1 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl pb-2 lg:text-2xl font-bold">
            Front-End Development
          </div>
          <div className="text-[#0098F1] leading-2 md:text-lg text-base ">
            <span className="mt-3  text-[#F6AC14] sm:mt-5 text-lg font-medium">
              HTML/CSS:
            </span>{" "}
            Mastery of HTML and CSS is essential for structuring web pages and
            applying styles to create visually appealing and responsive designs.
          </div>
          <div className="text-[#0098F1] leading-2  md:text-lg text-base ">
            <span className="mt-3  text-[#F6AC14] sm:mt-5 text-lg font-medium">
              JavaScript:
            </span>{" "}
            A deep understanding of JavaScript is necessary for building
            interactive web applications and enhancing frontend development.
          </div>
          <div className="text-[#0098F1] leading-2 md:text-lg text-base ">
            <span className="mt-3 text-[#F6AC14] sm:mt-5 text-lg font-medium">
              Angular/React:
            </span>{" "}
            Expertise in Angular or React allows for the creation of dynamic and
            efficient user interfaces for web applications.
          </div>
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1  tracking-tight text-[#0098F1] sm:leading-none sm:text-xl pb-2 lg:text-2xl font-bold">
            Back-End Development
          </div>
          <div className="text-[#0098F1] leading-2 md:text-lg text-base ">
            <span className="mt-3  text-[#F6AC14] sm:mt-5 text-lg font-medium">
              Java:
            </span>{" "}
            Proficiency in Java is vital for building scalable server-side
            applications and handling complex business logic efficiently.
          </div>
          <div className="text-[#0098F1] leading-2 md:text-lg text-base ">
            <span className="mt-3 text-lg font-medium text-[#F6AC14] sm:mt-5 ">
              Spring Framework:
            </span>{" "}
            Understanding the Spring framework is important for creating robust
            APIs and handling HTTP requests efficiently in Java.
          </div>
          <div className="text-[#0098F1] leading-2 md:text-lg text-base ">
            <span className="mt-3  text-[#F6AC14] sm:mt-5 text-lg font-medium">
              Database Management:
            </span>{" "}
            Knowledge of SQL or NoSQL databases and their integration with Java
            is essential for managing data and performing CRUD operations.
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
            <div className="text-[#0098F1]  md:text-lg text-base ">
              Prepare for Full Stack Java Development interviews
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1]  md:text-lg text-base ">
              Learn about Java web development including managing databases,
              handling user authentication, and deploying web applications.
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1]  md:text-lg text-base ">
              Gain the skills needed to excel in a Full Stack Java Development
              role
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
