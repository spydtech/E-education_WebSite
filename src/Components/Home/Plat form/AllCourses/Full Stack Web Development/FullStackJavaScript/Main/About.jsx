import React from "react";
import { FaCaretRight } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div>
        <div className="pt-4 font-lora">
          Mastering JavaScript Full Stack Development involves becoming
          proficient in both front-end and back-end technologies, enabling
          developers to build scalable and dynamic web applications. Here's a
          breakdown of the essential skills:
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-xl lg:text-2xl font-lora">
            Front-End Development
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 text-base font-bold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              React.js:
            </span>{" "}
            Mastery of React.js is essential for building interactive user
            interfaces and single-page applications, leveraging component-based
            architecture.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 text-base font-bold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              HTML/CSS:
            </span>{" "}
            Proficiency in HTML and CSS is necessary for structuring web pages
            and styling them to create visually appealing designs.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 text-base font-bold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              JavaScript:
            </span>{" "}
            A strong understanding of JavaScript is fundamental for implementing
            client-side logic and enhancing user experiences.
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
            Proficiency in Node.js is crucial for building scalable server-side
            applications using JavaScript, facilitating seamless communication
            between the front-end and back-end.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Express.js:
            </span>{" "}
            Understanding Express.js is essential for creating robust APIs and
            handling HTTP requests efficiently in Node.js applications.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Database Management:
            </span>{" "}
            Knowledge of databases like MongoDB or SQL databases and their
            integration with Node.js is essential for managing data and
            performing CRUD operations.
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
              Master the skills needed for JavaScript Full Stack Development.
            </div>
          </div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="text-gray-600 text-lg font-lora">
              Build scalable and dynamic web applications from scratch.
            </div>
          </div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="text-gray-600 text-lg font-lora">
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
