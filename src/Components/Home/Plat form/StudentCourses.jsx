  import React from "react";
  import { BiBarChartSquare } from "react-icons/bi";
  import { Link } from "react-router-dom";
  import { SiPaloaltosoftware } from "react-icons/si";
  import {
    IoLogoElectron,
    IoCodeWorking,
    IoFlask,
    IoGameController,
    IoLockClosed,
    IoAnalyticsSharp,
    IoCloudSharp,
    IoCodeSlash,
    IoConstructSharp,
    IoHardwareChipSharp,
    IoShieldCheckmark,
    IoArrowUndoCircleSharp,
    IoWifiSharp,
  } from "react-icons/io5";

  const StudentCourses = () => {
    const courseData = [
      {
        title: "Full Stack Web Development",
        icon: <IoLogoElectron />,
        description:
          "Build dynamic websites & applications with front-end & back-end skills.",
        link: "/student/student_fullStack_WebDevelopment",
      },
      {
        title: "Data Science",
        icon: <BiBarChartSquare />,
        description:
          "Master data analytics essentials for informed decisions & success.",
        link: "/student/student_data_Science",
      },
    
      {
        title: "Cybersecurity Fundamentals",
        icon: <IoLockClosed />,
        description:
          "Gain understanding of cybersecurity concepts & best practices.",
        link: "/student/student_cyber_security",
      },
      {
        title: "Ethical Hacking",
        icon: <IoShieldCheckmark />,
        description:
          "Learn ethical hacking: identify vulnerabilities & strengthen systems.",
        link: "/student/student_ethical_Hacking",
      },
      {
        title: "Network Security",
        icon: <IoWifiSharp />,
        description:
          "Discover principles of network security: encryption, firewalls, IDS.",
        link: "/student/student_network_security",
      }, {
        title: "Software Testing",
        icon: <SiPaloaltosoftware />,
        description:
          "software application functions correctly and meets specified requirements.",
        link: "/student/student_software_Testing",
      },
    
    ];

    return (
      <>
        <div className="text-center mb-24">
          <span className="block  text-xs md:text-sm text-indigo-500 font-medium">
            Top Courses in Demand in India
          </span>
          <h3 className="text-2xl md:text-4xl font-semibold text-gradient">
            Popular Skill Enhancement Programs
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-12">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="flex relative flex-col w-80 rounded-xl bg-white shadow-2xl mx-4 my-4 group-hover:translate-x-full duration-500  transition  hover:bg-[#48cae4] hover:text-white"
            >
              <div class="relative mx-4 -mt-12 flex justify-center items-center w-24 h-24 overflow-hidden rounded-lg bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[#006d77]">
                <div className="text-4xl"> {course.icon}</div>
              </div>
              <div className="p-6">
                <h5 className="mb-2 font-sans text-xl font-semibold text-blue-gray-900">
                  {course.title}
                </h5>
                <p className="font-sans text-base font-light  ">
                  {course.description}
                </p>
              </div>
              <div className="p-6 pt-0">
                
                <Link to={course.link}>
                  <button className="select-none rounded-lg bg-[#006d77] py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition duration-300 hover:bg-blue-600 focus:opacity-85">
                  Start Learning
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  export default StudentCourses;
