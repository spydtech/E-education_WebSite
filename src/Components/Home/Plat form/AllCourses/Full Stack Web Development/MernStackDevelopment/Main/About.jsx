import React from "react";
import { FaCaretRight } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div>
        <div className="fone-bold md:text-5xl font-lora text-2xl font-bold">
          About this Course
        </div>
        <div className="pt-4 w-full font-lora">
          Mastering MEAN Stack Development involves becoming proficient in all
          aspects of the MEAN stack, which includes MongoDB, Express.js,
          Angular, and Node.js. This comprehensive skill set allows developers
          to handle both the front-end and back-end of web applications. Here's
          a breakdown of what it entails:
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-xl lg:text-2xl font-lora">
            Front-End Development
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 text-base font-bold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Angular:
            </span>{" "}
            Expertise in Angular is crucial for creating dynamic, single-page
            applications with robust user interfaces and efficient performance.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 text-base font-bold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              HTML/CSS:
            </span>{" "}
            Mastery of HTML and CSS is essential for structuring web pages and
            applying styles to create visually appealing and responsive designs.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 text-base font-bold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              JavaScript/TypeScript:
            </span>{" "}
            A deep understanding of JavaScript and TypeScript is necessary for
            building interactive web applications and enhancing Angular
            development.
          </div>
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-xl lg:text-2xl font-lora">
            Back-End Development
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Node.js:
            </span>{" "}
            Proficiency in Node.js is vital for building scalable server-side
            applications using JavaScript, allowing for seamless integration
            with front-end development.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Express.js:
            </span>{" "}
            Understanding Express.js is important for creating robust APIs and
            handling HTTP requests efficiently.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Database Management:
            </span>{" "}
            Knowledge of MongoDB and its integration with Node.js is essential
            for managing NoSQL databases and performing CRUD operations.
          </div>
        </div>

        <div className="py-8">
          <hr className="border-t border-gray-500" />
        </div>
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          What you'll learn
        </div>
        <div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="text-gray-600 text-lg font-lora">
              Prepare for the MEAN Stack Development interview
            </div>
          </div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="text-gray-600 text-lg font-lora">
              Learn about MEAN Stack Development including managing access,
              defining organizational structure/policies, configuring network
              security, and analyzing logs.
            </div>
          </div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="text-gray-600 text-lg font-lora">
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
