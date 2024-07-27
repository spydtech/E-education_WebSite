import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: (
    <div className="mt-3 font-samibold text-[#0098F1] sm:mt-5 text-md lg:text-lg xl:text-xl font-sans">
      Courses We Are Covered in this Course
    </div>
  ),
  rows: [
    {
      title: (
        <div className="mt-3 font-samibold text-[#0098F1]  sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-sans">
          {" "}
          Front-end Development Fundamentals
        </div>
      ),
      content: (
        <div>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            front-end essentials like HTML5, CSS3, and JavaScript, laying the
            groundwork for captivating user interfaces.
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Explore responsive web design principles for seamless experiences
            across devices.{" "}
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Delve into popular front-end frameworks such as React, Angular, and
            Vue.js to build dynamic web applications effortlessly
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-samibold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-sans">
          JavaScript Programming Basics
        </div>
      ),
      content: (
        <div>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            front-end essentials like HTML5, CSS3, and JavaScript, laying the
            groundwork for captivating user interfaces.
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Explore responsive web design principles for seamless experiences
            across devices.{" "}
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Delve into popular front-end frameworks such as React, Angular, and
            Vue.js to build dynamic web applications effortlessly
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-samibold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-sans">
          Responsive Web Design Techniques
        </div>
      ),
      content: (
        <div>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            front-end essentials like HTML5, CSS3, and JavaScript, laying the
            groundwork for captivating user interfaces.
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Explore responsive web design principles for seamless experiences
            across devices.{" "}
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Delve into popular front-end frameworks such as React, Angular, and
            Vue.js to build dynamic web applications effortlessly
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-samibold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-sans">
          Introduction to Front-end Frameworks (e.g., React, Angular, Vue.js)
        </div>
      ),
      content: (
        <div>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            front-end essentials like HTML5, CSS3, and JavaScript, laying the
            groundwork for captivating user interfaces.
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Explore responsive web design principles for seamless experiences
            across devices.{" "}
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Delve into popular front-end frameworks such as React, Angular, and
            Vue.js to build dynamic web applications effortlessly
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-samibold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-sans">
          Back-end Development Concepts
        </div>
      ),
      content: (
        <div>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            front-end essentials like HTML5, CSS3, and JavaScript, laying the
            groundwork for captivating user interfaces.
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Explore responsive web design principles for seamless experiences
            across devices.{" "}
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Delve into popular front-end frameworks such as React, Angular, and
            Vue.js to build dynamic web applications effortlessly
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-samibold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-sans">
          Server-side Scripting Languages (e.g., Node.js, Python, Ruby, Java)
        </div>
      ),
      content: (
        <div>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            front-end essentials like HTML5, CSS3, and JavaScript, laying the
            groundwork for captivating user interfaces.
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Explore responsive web design principles for seamless experiences
            across devices.{" "}
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Delve into popular front-end frameworks such as React, Angular, and
            Vue.js to build dynamic web applications effortlessly
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-samibold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-sans">
          Database Management Systems (SQL and NoSQL)
        </div>
      ),
      content: (
        <div>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            front-end essentials like HTML5, CSS3, and JavaScript, laying the
            groundwork for captivating user interfaces.
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Explore responsive web design principles for seamless experiences
            across devices.{" "}
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Delve into popular front-end frameworks such as React, Angular, and
            Vue.js to build dynamic web applications effortlessly
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-samibold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-sans">
          Version Control Systems (e.g., Git)
        </div>
      ),
      content: (
        <div>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            front-end essentials like HTML5, CSS3, and JavaScript, laying the
            groundwork for captivating user interfaces.
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Explore responsive web design principles for seamless experiences
            across devices.{" "}
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Delve into popular front-end frameworks such as React, Angular, and
            Vue.js to build dynamic web applications effortlessly
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-samibold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-sans">
          Project Management and Collaboration Tools
        </div>
      ),
      content: (
        <div>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            front-end essentials like HTML5, CSS3, and JavaScript, laying the
            groundwork for captivating user interfaces.
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Explore responsive web design principles for seamless experiences
            across devices.{" "}
          </p>
          <p className=" text-base text-[#F6AC14] text-md font-sans">
            Delve into popular front-end frameworks such as React, Angular, and
            Vue.js to build dynamic web applications effortlessly
          </p>
        </div>
      ),
    },
  ],
};

const styles = {
  bgColor: "white",
  // titleTextColor: "blue",
  // rowTitleColor: "blue",
  rowContentColor: "grey",
  // arrowColor: "red",
};

const config = {
  animate: true,
  // arrowIcon: "S",
  tabFocus: true,
};

export default function FullStackWebDev() {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
