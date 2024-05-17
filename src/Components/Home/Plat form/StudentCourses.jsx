  import React from "react";
  import { BiBarChartSquare } from "react-icons/bi";
  import { Link } from "react-router-dom";
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
        link: "/fullStack",
      },
      {
        title: "Data Science",
        icon: <BiBarChartSquare />,
        description:
          "Master data analytics essentials for informed decisions & success.",
        link: "/dataScienceArray",
      },
      // {
      //   title: "Data Structures",
      //   icon: <IoFlask />,
      //   description:
      //     "Master fundamental concepts of data structures and algorithms.",
      //   link: "link-to-the-course",
      // },
      // {
      //   title: "Machine Learning",
      //   icon: <IoAnalyticsSharp />,
      //   description:
      //     "Explore machine learning from basic to advanced techniques.",
      //   link: "/machineLearning",
      // },
      // {
      //   title: "Game Development",
      //   icon: <IoGameController />,
      //   description:
      //     "Create captivating 2D games covering design to implementation.",
      //   link: "link-to-the-course",
      // },
      {
        title: "Cybersecurity Fundamentals",
        icon: <IoLockClosed />,
        description:
          "Gain understanding of cybersecurity concepts & best practices.",
        link: "link-to-the-course",
      },
      {
        title: "Ethical Hacking",
        icon: <IoShieldCheckmark />,
        description:
          "Learn ethical hacking: identify vulnerabilities & strengthen systems.",
        link: "link-to-the-course",
      },
      {
        title: "Network Security",
        icon: <IoWifiSharp />,
        description:
          "Discover principles of network security: encryption, firewalls, IDS.",
        link: "link-to-the-course",
      },
      // {
      //   title: "Certifications",
      //   icon: <IoArrowUndoCircleSharp />,
      //   description:
      //     "Prepare for cybersecurity certifications validating expertise.",
      //   link: "link-to-the-course",
      // },
      // {
      //   title: "Data Analysis with Python",
      //   icon: <IoCodeSlash />,
      //   description:
      //     "Learn data analysis with Python: manipulation, visualization, ML.",
      //   link: "link-to-the-course",
      // },
      // {
      //   title: "Data Visualization",
      //   icon: <IoCodeWorking />,
      //   description:
      //     "Master data visualization with Python: Matplotlib & Seaborn.",
      //   link: "link-to-the-course",
      // },
      // {
      //   title: "Big Data",
      //   icon: <IoConstructSharp />,
      //   description:
      //     "Dive into big data: technologies, platforms, analytics techniques.",
      //   link: "link-to-the-course",
      // },
      // {
      //   title: "Data Engineering",
      //   icon: <IoHardwareChipSharp />,
      //   description:
      //     "Become a skilled data engineer on GCP: scalable data processing.",
      //   link: "link-to-the-course",
      // },
      // {
      //   title: "AWS",
      //   icon: <IoCloudSharp />,
      //   description: "Prepare for AWS Certified Solutions Architect – Associate.",
      //   link: "link-to-the-course",
      // },
      // {
      //   title: "Microsoft Azure",
      //   icon: <IoCloudSharp />,
      //   description:
      //     "Get started with Microsoft Azure: services, deployment, management.",
      //   link: "link-to-the-course",
      // },
      // {
      //   title: "Google Cloud",
      //   icon: <IoCloudSharp />,
      //   description:
      //     "Explore Google Cloud Platform: compute, storage, networking, security.",
      //   link: "link-to-the-course",
      // },
      // {
      //   title: "Cisco CCNA",
      //   icon: <IoWifiSharp />,
      //   description:
      //     "Prepare for Cisco CCNA 200-301 exam: installation, configuration",
      //   link: "link-to-the-course",
      // },
      // {
      //   title: "CompTIA A+",
      //   icon: <IoConstructSharp />,
      //   description:
      //     "Get certified with CompTIA A+ 2019: hardware, networking, troubleshooting.",
      //   link: "link-to-the-course",
      // },
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
