import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className=" lg:pl-20  w-5/6">
      <div className=" text-[#0098F1] lg:text-4xl font-bold text-2xl">
          About this Course
        </div>
        <div className="pt-4 lg:text-lg text-base text-[#0098F1] font">
          Mastering Full Stack Python Development involves becoming proficient
          in both front-end and back-end aspects using Python and its associated
          technologies. Here's a breakdown of what it entails:
        </div>       
        <div className="py-2 leading-2 gap-4">
          <div className="mt-1  tracking-tight text-[#0098F1] sm:leading-none text-xl pb-2 lg:text-2xl font-bold">
            Front-End Development
          </div>
          <div className="text-[#0098F1] leading-2 lg:text-lg text-base ">
            <span className="mt-3  text-[#F6AC14] sm:mt-5  text-lg font-medium">
              HTML/CSS:
            </span>{" "}
            Mastery of HTML and CSS is essential for structuring web pages and
            applying styles to create visually appealing and responsive designs.
          </div>
          <div className="text-[#0098F1] leading-2 lg:text-lg text-base ">
            <span className="mt-3  text-lg font-medium text-[#F6AC14] sm:mt-5 t">
              JavaScript:
            </span>{" "}
            A deep understanding of JavaScript is necessary for building
            interactive web applications and enhancing frontend development.
          </div>
          <div className="text-[#0098F1] leading-2 lg:text-lg text-base">
            <span className="mt-3  text-lg font-medium text-[#F6AC14] sm:mt-5nt">
              React:
            </span>{" "}
            Expertise in React allows for the creation of dynamic and efficient
            user interfaces for web applications.
          </div>
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1  tracking-tight text-[#0098F1] sm:leading-none text-xl pb-2 lg:text-2xl font-bold">
            Back-End Development
          </div>
          <div className="text-[#0098F1] leading-2 lg:text-lg text-base ">
            <span className="mt-3  text-lg font-medium text-[#F6AC14] sm:mt-5 ">
              Python:
            </span>{" "}
            Proficiency in Python is vital for building scalable server-side
            applications and handling complex business logic efficiently.
          </div>
          <div className="text-[#0098F1] leading-2 lg:text-lg text-base ">
            <span className="mt-3  text-lg font-medium text-[#F6AC14] sm:mt-5 ">
              Django/Flask:
            </span>{" "}
            Understanding Django or Flask frameworks is important for creating
            robust APIs and handling HTTP requests efficiently in Python.
          </div>
          <div className="text-[#0098F1] leading-2 lg:text-lg text-base ">
            <span className="mt-3  text-lg font-medium text-[#F6AC14] sm:mt-5 ">
              Database Management:
            </span>{" "}
            Knowledge of SQL or NoSQL databases and their integration with
            Python is essential for managing data and performing CRUD
            operations.
          </div>
        </div>
        <div className="mt-3 text-[#0098F1] sm:mt-5 text-xl pb-2 lg:text-2xl font-bold">
          What you'll learn
        </div>
        <div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1]  lg:text-lg text-base ">
              Prepare for Full Stack Python Development interviews
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1]  lg:text-lg text-base ">
              Learn about Python web development including managing databases,
              handling user authentication, and deploying web applications.
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1]  lg:text-lg text-base">
              Gain the skills needed to excel in a Full Stack Python Development
              role
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
