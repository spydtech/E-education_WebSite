import React from "react";
import { FaCaretRight } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div>
        <div className="pt-4 font-lora">
          Mastering Full Stack Java Development involves becoming proficient in
          both front-end and back-end aspects using Java and its associated
          technologies. Here's a breakdown of what it entails:
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-xl lg:text-2xl font-lora">
            Front-End Development
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
              JavaScript:
            </span>{" "}
            A deep understanding of JavaScript is necessary for building
            interactive web applications and enhancing frontend development.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 text-base font-bold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Angular/React:
            </span>{" "}
            Expertise in Angular or React allows for the creation of dynamic and
            efficient user interfaces for web applications.
          </div>
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-xl lg:text-2xl font-lora">
            Back-End Development
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Java:
            </span>{" "}
            Proficiency in Java is vital for building scalable server-side
            applications and handling complex business logic efficiently.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Spring Framework:
            </span>{" "}
            Understanding the Spring framework is important for creating robust
            APIs and handling HTTP requests efficiently in Java.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Database Management:
            </span>{" "}
            Knowledge of SQL or NoSQL databases and their integration with Java
            is essential for managing data and performing CRUD operations.
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
              Prepare for Full Stack Java Development interviews
            </div>
          </div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="text-gray-600 text-lg font-lora">
              Learn about Java web development including managing databases,
              handling user authentication, and deploying web applications.
            </div>
          </div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="text-gray-600 text-lg font-lora">
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
