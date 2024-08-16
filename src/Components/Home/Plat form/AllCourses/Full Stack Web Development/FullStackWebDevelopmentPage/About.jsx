import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
const About = () => {
  return (
    <>
      <div className=" lg:pl-20  w-5/6"> 
      <div className=" md:text-4xl  font text-2xl text-[#0098F1] font-bold">About this Course</div>
        <div className="pt-2 leading-1 w-full md:text-lg text-[#0098F1] pb-4 font">
          Mastering Full Stack Web Development involves becoming proficient in
          both the front-end and back-end aspects of web development. This
          includes understanding various programming languages, frameworks,
          databases, and deployment techniques. Here's a breakdown of what it
          entails:
        </div>
        <div className=" gap-4 pb-4 ">
          <div className="mt-1 font-bold  tracking-tight  text-[#0098F1] sm:leading-none sm:text-xl pb-2 lg:text-2xl font"> Front-End Development:</div>
          <div className="  text-[#0098F1] leading-2 md:text-lg text-base font">
            <span className="mt-3   text-[#F6AC14] text-lg sm:mt-5 font-medium">HTML/CSS:</span>{" "} Proficiency in at least
            one back-end programming language such as JavaScript (Node.js),
            Python (Django or Flask), Ruby (Ruby on Rails), or Java (Spring
            Boot).
          </div>
          <div className="  text-[#0098F1] leading-2 md:text-lg text-base font">
            <span className="mt-3 text-xl   text-[#F6AC14] sm:mt-5 font-medium ">JavaScript:</span>{" "} A deep understanding
            of JavaScript is crucial for creating interactive and dynamic web
            experiences. This includes modern frameworks/libraries like React,
            Angular, or Vue.js.
          </div>
          <div className="  text-[#0098F1] text-base md:text-lg leading-2  font">
            <span className="mt-3 text-xl font-lg   text-[#F6AC14] sm:mt-5 font-medium ">Responsive Design:</span>{" "} Ability to
            create websites that adapt and look good on various devices and
            screen sizes
          </div>
        </div>
        <div className="py-2 gap-4 leading-2 pb-4 ">
          <div className="mt-1 font-bold  tracking-tight  sm:leading-none sm:text-xl lg:text-2xl pb-2 font text-[#0098F1]"> Back-End Development:</div>
          <div className="  text-[#0098F1] text-base md:text-lg leading-2  font">
            <span className="mt-3 text-xl  text-[#F6AC14]   sm:mt-5 font-medium font">Programming Languages:</span>{" "} Mastery of
            HTML and CSS is fundamental for structuring web pages and styling
            them effectively. Proficiency in at least one back-end programming
            language such as JavaScript (Node.js), Python (Django or Flask)
            <div className="  text-[#0098F1] text-base md:text-lg leading-2  font"> <span className="mt-3  text-xl text-[#F6AC14] sm:mt-5  font-medium">Database Management:</span>{" "} 
           Understanding of database systems like MySQL, PostgreSQL, MongoDB,
            or SQLite, and how to interact with them using SQL or NoSQL queries.
            </div>{" "}
          </div>
          <div className="  text-[#0098F1] md:text-lg text-base font ">
            <span className="mt-3  text-xl text-[#F6AC14]  leading-2  sm:mt-5 font-medium font">API Development: </span>{" "} Ability to
            create websites that adapt and look good on various devices and
            screen sizes
          </div>
        </div>
        <div className="mt-3 font-bold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-2lg xl:text-2xl font">What you'll learn</div>
        <div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]" />
            </div>
            <div className="text-base  text-[#0098F1] md:text-lg font" >Prepare for the Full Stack Web Development interview</div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]" />
            </div>
            <div className=" text-base  text-[#0098F1] md:text-lg font">
              Learn about Full Stack Web Development including managing access,
              defining organizational structure/ policies, configuring network
              security, and analyzing logs.
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="  text-base  text-[#0098F1] md:text-lg font">
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
