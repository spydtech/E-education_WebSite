import React from "react";
import { FaCaretRight } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div> 
        <div className="pt-4  font-lora">
          Mastering Full Stack Web Development involves becoming proficient in
          both the front-end and back-end aspects of web development. This
          includes understanding various programming languages, frameworks,
          databases, and deployment techniques. Here's a breakdown of what it
          entails:
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-xl lg:text-2xl font-lora"> Front-End Development</div>
          <div className="  text-gray-600 text-base font-lora">
            <span className="mt-3 text-base font-bold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">HTML/CSS:</span> Proficiency in at least
            one back-end programming language such as JavaScript (Node.js),
            Python (Django or Flask), Ruby (Ruby on Rails), or Java (Spring
            Boot).
          </div>
          <div className="  text-gray-600 text-base font-lora">
            <span className="mt-3 text-base font-bold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">JavaScript:</span> A deep understanding
            of JavaScript is crucial for creating interactive and dynamic web
            experiences. This includes modern frameworks/libraries like React,
            Angular, or Vue.js.
          </div>
          <div className="  text-gray-600 text-base font-lora">
            <span className="mt-3 text-base font-bold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">Responsive Design:</span> Ability to
            create websites that adapt and look good on various devices and
            screen sizes
          </div>
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-xl lg:text-2xl font-lora"> Back-End Development:</div>
          <div className="  text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">Programming Languages:</span> Mastery of
            HTML and CSS is fundamental for structuring web pages and styling
            them effectively. Proficiency in at least one back-end programming
            language such as JavaScript (Node.js), Python (Django or Flask)
            <div className="  text-gray-600 text-base font-lora"> <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">Database Management:</span>
           Understanding of database systems like MySQL, PostgreSQL, MongoDB,
            or SQLite, and how to interact with them using SQL or NoSQL queries.
            </div>{" "}
          </div>
          <div className="  text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">API Development: </span> Ability to
            create websites that adapt and look good on various devices and
            screen sizes
          </div>
        </div>

        <div className="py-8">
          <hr className="border-t border-gray-500" />
        </div>
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">What you'll learn</div>
        <div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="  text-gray-600 text-lg font-lora" >Prepare for the Full Stack Web Development interview</div>
          </div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="  text-gray-600 text-lg font-lora">
              Learn about Full Stack Web Development including managing access,
              defining organizational structure/ policies, configuring network
              security, and analyzing logs.
            </div>
          </div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="  text-gray-600 text-lg font-lora">
              Learn the skills needed to be successful in a Full Stack Web
              Development role
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
