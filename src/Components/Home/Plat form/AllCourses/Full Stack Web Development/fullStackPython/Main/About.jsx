import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className=" lg:pl-20  w-5/6">
      <div className="fone-bold text-[#0098F1] md:text-5xl font text-2xl font-bold">
          About this Course
        </div>
        <div className="pt-4 text-[#0098F1] font">
          Mastering Full Stack Python Development involves becoming proficient
          in both front-end and back-end aspects using Python and its associated
          technologies. Here's a breakdown of what it entails:
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 font-bold leading-10 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl lg:text-2xl font">
            Front-End Development
          </div>
          <div className="text-[#0098F1] text-base font">
            <span className="mt-3 text-base font-bold text-[#F6AC14] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
              HTML/CSS:
            </span>{" "}
            Mastery of HTML and CSS is essential for structuring web pages and
            applying styles to create visually appealing and responsive designs.
          </div>
          <div className="text-[#0098F1] text-base font">
            <span className="mt-3 text-base font-bold text-[#F6AC14] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
              JavaScript:
            </span>{" "}
            A deep understanding of JavaScript is necessary for building
            interactive web applications and enhancing frontend development.
          </div>
          <div className="text-[#0098F1] text-base font">
            <span className="mt-3 text-base font-bold text-[#F6AC14] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
              React:
            </span>{" "}
            Expertise in React allows for the creation of dynamic and efficient
            user interfaces for web applications.
          </div>
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 font-bold leading-10 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl lg:text-2xl font">
            Back-End Development
          </div>
          <div className="text-[#0098F1] text-base font">
            <span className="mt-3 font-bold text-base text-[#F6AC14] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
              Python:
            </span>{" "}
            Proficiency in Python is vital for building scalable server-side
            applications and handling complex business logic efficiently.
          </div>
          <div className="text-[#0098F1] text-base font">
            <span className="mt-3 font-bold text-base text-[#F6AC14] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
              Django/Flask:
            </span>{" "}
            Understanding Django or Flask frameworks is important for creating
            robust APIs and handling HTTP requests efficiently in Python.
          </div>
          <div className="text-[#0098F1] text-base font">
            <span className="mt-3 font-bold text-base text-[#F6AC14] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
              Database Management:
            </span>{" "}
            Knowledge of SQL or NoSQL databases and their integration with
            Python is essential for managing data and performing CRUD
            operations.
          </div>
        </div>

        <div className="py-8">
        </div>
        <div className="mt-3 font-extrabold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          What you'll learn
        </div>
        <div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1] text-lg font">
              Prepare for Full Stack Python Development interviews
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1] text-lg font">
              Learn about Python web development including managing databases,
              handling user authentication, and deploying web applications.
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1] text-lg font">
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
