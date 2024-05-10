import React from "react";
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SiSemanticweb } from "react-icons/si";
import { FaMobile } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { SiAlwaysdata } from "react-icons/si";
import { GrVirtualMachine } from "react-icons/gr";
import { AiFillDatabase } from "react-icons/ai";
import { DiDatabase } from "react-icons/di";
import { SiCyberdefenders } from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineNetworkCheck } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";
import { FaMixcloud } from "react-icons/fa";
import { SiNintendonetwork } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { SiPaloaltosoftware } from "react-icons/si";
// const ProfessionalsCourses = () => {
// const courseData = [
//   {
//     title: "Full Stack Web Development",
//     description:
//       "Master full-stack web development with this comprehensive bootcamp course on E-education by Colt Steele.",
//     link: "/fullStack",
//     icon: <SiSemanticweb />,
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "Learn iOS app development from scratch with Dr. Angela Yu's course on E-education.",
//     link: "",
//     icon: <FaMobile />,
//   },
//   {
//     title: "Python Programming",
//     description:
//       "Become proficient in Python programming with this comprehensive bootcamp course on E-education by Jose Portilla.",
//     link: "",
//     icon: <FaPython />,
//   },
//   {
//     title: "Java Programming",
//     description:
//       "Master Java programming with Tim Buchalka's course on E-education.",
//     link: "",
//     icon: <FaJava />,
//   },
//   {
//     title: "Data Science and Analytics",
//     description:
//       "Deep dive into data science and analytics with a specialization offered by Johns Hopkins University on E-education.",
//     link: "link-to-the-course",
//     icon: <SiAlwaysdata />,
//   },
//   {
//     title: "Machine Learning",
//     description:
//       "Explore hands-on Python & R in data science with Kirill Eremenko's course on E-education.",
//     link: "",
//     icon: <GrVirtualMachine />,
//   },
//   {
//     title: "Data Visualization",
//     description:
//       "Learn data visualization with Python and Matplotlib through the University of Michigan's course on E-education.",
//     link: "link-to-the-course",
//     icon: <AiFillDatabase />,
//   },
//   {
//     title: "Big Data",
//     description:
//       "Dive deep into big data with a specialization offered by University of California, San Diego on E-education.",
//     link: "link-to-the-course",
//     icon: <DiDatabase />,
//   },
//   {
//     title: "Cybersecurity",
//     description:
//       "Get introduced to the fundamentals of cybersecurity with a course by NYU on E-education.",
//     link: "link-to-the-course",
//     icon: <SiCyberdefenders />,
//   },
//   {
//     title: "Ethical Hacking",
//     description:
//       "Learn ethical hacking with Ermin Kreponic's course on E-education.",
//     link: "",
//     icon: <GiGraduateCap />,
//   },
//   {
//     title: "Network Security",
//     description:
//       "Master network security fundamentals with a course on Pluralsight.",
//     link: "link-to-the-course",
//     icon: <MdOutlineNetworkCheck />,
//   },
//   {
//     title: "Certified Information Systems Security Professional (CISSP)",
//     description:
//       "Prepare for the CISSP certification with official training offered by ISC².",
//     link: "link-to-the-course",
//     icon: <GrShieldSecurity />,
//   },
//   {
//     title: "Cloud Computing",
//     description:
//       "Learn cloud computing with various resources including courses on A Cloud Guru and E-education.",
//     link: "link-to-the-course",
//     icon: <FaMixcloud />,
//   },
//   {
//     title: "IT and Networking",
//     description:
//       "Master IT and networking with various resources including courses on E-education and Cisco's official training.",
//     link: "link-to-the-course",
//     icon: <SiNintendonetwork />,
//   },
//   {
//     title: "Database Management",
//     description:
//       "Master database management with various courses including SQL, NoSQL, and database administration.",
//     link: "link-to-the-course",
//     icon: <FaDatabase />,
//   },
//   {
//     title: "UI/UX Design",
//     description:
//       "Master UI/UX design with various courses including Adobe XD, Figma, Sketch, and more.",
//     link: "link-to-the-course",
//     icon: <FaComputer />,
//   },
//   {
//     title: "Software Engineering Practices",
//     description:
//       "Learn software engineering practices including agile, scrum, testing, and DevOps.",
//     link: "link-to-the-course",
//     icon: <SiPaloaltosoftware />,
//   },
//   // Add more courses here with respective icons
// ];
//   return (
//     <>
//       <div>
//         <div className="text-4xl font-bold text-center mb-8 text-gray-800 underline mt-48">
//           Explore Your Courses
//         </div>
//       </div>

//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full from-indigo-800 to-violet-400 py-12 text-slate-900  place-items-center">
//         {courseData.map((course, index) => (
//           <TiltCard
//             key={index}
//             title={course.title}
//             description={course.description}
//             icon={course.icon}
//             link={course.link}
//           />
//         ))}
//       </div>
//     </>
//   );
// };
// const TiltCard = ({ title, description, icon, link }) => {
//   // Accept link prop
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   const rotateX = useTransform(
//     mouseYSpring,
//     [-0.5, 0.5],
//     ["17.5deg", "-17.5deg"]
//   );
//   const rotateY = useTransform(
//     mouseXSpring,
//     [-0.5, 0.5],
//     ["-17.5deg", "17.5deg"]
//   );

//   const handleMouseMove = (e) => {
//     const rect = e.target.getBoundingClientRect();

//     const width = rect.width;
//     const height = rect.height;

//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;

//     x.set(xPct);
//     y.set(yPct);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <Link to={link}>
//       {" "}
//       {/* Wrap the card with Link */}
//       <motion.div
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           rotateY,
//           rotateX,
//           transformStyle: "preserve-3d",
//         }}
//         className="relative h-[400px] w-72 gap-0 rounded-xl bg-[#0077b6]  mb-5 "
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             transform: "translateZ(75px)",
//             transformStyle: "preserve-3d",
//           }}
//           className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
//         >
//           <div className="w-20 h-20 bg-[#0077b6]  rounded-full flex justify-center items-center ">
//             <h1 className="text-white text-4xl">{icon}</h1>
//           </div>
//           <h3 className="py-2 font-extrabold font-xl text-gradient">{title}</h3>
//           <p
//             style={{
//               transform: "translateZ(50px)",
//             }}
//             className="text-center px-4"
//           >
//             {description}
//           </p>
//         </div>
//       </motion.div>
//     </Link>
//   );
// };
// export default ProfessionalsCourses;

import { GrBook } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BsTelephoneOutbound } from "react-icons/bs";

import { IoRemoveOutline } from "react-icons/io5";
import { GiPreviousButton } from "react-icons/gi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";

// const courses = [
//   { title: "Introduction to HTML", duration: "2 Days" },
//   { title: "UX/UI Design Jumpstart", duration: "3 Days" },
//   { title: "Mobile App Development Training", duration: "4 Days" },
//   { title: "CSS Introduction & Intermediate", duration: "2 Days" },
//   { title: "WordPress Essentials", duration: "3 Days" },
//   { title: "Javascript & JQuery Masterclass", duration: "4 Days" },

//   { title: "AngularJS Developer", duration: "5 Days" },
//   { title: "JQuery Introduction", duration: "3 Days" },
//   { title: "Web Development Training With TypeScript", duration: "4 Days" },
//   { title: "Laravel Web Development Training", duration: "5 Days" },
//   { title: "IOS App Development Training", duration: "4 Days" },
//   { title: "React Native Training", duration: "5 Days" },
//   {
//     title: "Mobile App Development Training Using Flutter",
//     duration: "5 Days",
//   },
//   { title: "MEAN Stack Web Development Training", duration: "6 Days" },
//   { title: "Android App Development Training", duration: "5 Days" },
//   { title: "Responsive Web Design Training", duration: "3 Days" },
//   { title: "Angular Training", duration: "4 Days" },
//   { title: "Python Programming Training", duration: "4 Days" },
//   { title: "Visual Basic Programming For .NET", duration: "3 Days" },
//   { title: "PHP Programming", duration: "4 Days" },
//   { title: "R Programming", duration: "3 Days" },
//   { title: "Bootstrap Training", duration: "3 Days" },
//   { title: "ReactJS And Redux Training", duration: "4 Days" },
//   { title: "Vue.js Framework Training", duration: "4 Days" },
//   { title: ".NET Programming Training", duration: "5 Days" },
//   { title: "C# And .NET Training", duration: "5 Days" },
//   { title: "SwiftUI Training", duration: "3 Days" },
//   { title: "Python Game Development Training With Pygame", duration: "4 Days" },
// ];

const courses = [
  {
    title: "Full Stack Web Development",
    description:
      "Master full-stack web development with a comprehensive bootcamp course on E-education.",
    link: "/fullStack",
    icon: <SiSemanticweb style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Mobile App Development",
    description:
      "Start your journey in iOS app development with expert guidance.",
    link: "",
    icon: <FaMobile style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Python Programming",
    description: "Unlock the power of Python programming with E-education.",
    link: "",
    icon: <FaPython style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Java Programming",
    description:
      "Build a solid foundation in Java programming with an engaging course on E-education.",
    link: "",
    icon: <FaJava style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Data Science and Analytics",
    description:
      "Dive deep into data science and analytics with a specialized course.",
    link: "link-to-the-course",
    icon: <SiAlwaysdata style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Machine Learning",
    description: "Explore machine learning with hands-on Python & R training .",
    link: "",
    icon: <GrVirtualMachine style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Data Visualization",
    description:
      "Master the art of data visualization with Python and Matplotlib in a course.",
    link: "link-to-the-course",
    icon: <AiFillDatabase style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Big Data",
    description:
      "Conquer big data challenges with specialized training  on E-education.",
    link: "link-to-the-course",
    icon: <DiDatabase style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Cybersecurity",
    description:
      "Embark on a journey into cybersecurity fundamentals  on E-education.",
    link: "link-to-the-course",
    icon: <SiCyberdefenders style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Ethical Hacking",
    description:
      "Learn the art of ethical hacking through comprehensive training on E-education.",
    link: "",
    icon: <GiGraduateCap style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Network Security",
    description:
      "Master network security essentials with a comprehensive course on Pluralsight.",
    link: "link-to-the-course",
    icon: <MdOutlineNetworkCheck style={{ width: "40px", height: "40px" }} />,
  },
  // {
  //   title: "Certified Information Systems Security Professional (CISSP)",
  //   description:
  //     "Prepare for the CISSP certification exam with official training  E-education.",
  //   link: "link-to-the-course",
  //   icon: <GrShieldSecurity style={{ width: '40px', height: '40px' }} />,
  // },
  {
    title: "Cloud Computing",
    description: "Embark on a journey into cloud computing with E-education.",
    link: "link-to-the-course",
    icon: <FaMixcloud style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "IT and Networking",
    description:
      "Master IT and networking essentials with courses on E-education.",
    link: "link-to-the-course",
    icon: <SiNintendonetwork style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Database Management",
    description:
      "Unlock the potential of database management with E-education.",
    link: "link-to-the-course",
    icon: <FaDatabase style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "UI/UX Design",
    description:
      "Master the principles of UI/UX design with courses on E-education.",
    link: "link-to-the-course",
    icon: <FaComputer style={{ width: "40px", height: "40px" }} />,
  },
  // {
  //   title: "Software Engineering Practices",
  //   description:
  //     "Learn agile, scrum, testing, and DevOps courses on E-education.",
  //   link: "link-to-the-course",
  //   icon: <SiPaloaltosoftware  style={{ width: '40px', height: '40px' }} />,
  // },
  // Add more courses here with respective icons
];

function ProfessionalsCourses() {
  return (
    <>
      <div id="heading" className="mt-40 space-y-6 px-32 ">
        <p className="text-center text-xl md:lg:sm:w-auto w-96 text-black">
          Best Selling Courses in India
        </p>
        <h1 className="text-center font-bold text-4xl md:lg:sm:w-auto w-96 text-violet-800">
          Highly Demanded Skill Enhancement Courses
        </h1>
        <h1 className="flex justify-center md:lg:sm:w-auto w-96 text-cyan-500">
          <IoRemoveOutline className="text-[40px]" />
          <IoReorderThreeOutline className="text-[40px]" />{" "}
          <IoRemoveOutline className="text-[40px]" />
        </h1>
      </div>
      <div
        id="submain"
        className="pr-4 mb-24  md:lg:xl:pl-12 pl-32  h-auto w-full grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:lg:gap-y-10 gap-y-12 grid-cols-1"
      >
        {courses.map((course, index) => (
          <div
            key={index}
            className="w-[390px]  group hover:bg-white border-2 shadow-xl shadow-gray-400 rounded "
          >
            <div className="flex rounded justify-center bg-gray-200  px-16 w-auto h-36 items-center text-4xl cursor-pointer relative before:absolute group-hover:before:bg-[#023047] before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.0] group-hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
              <div className="border-b-2 mx-16 px-8 absolute border-[#023047] bg-white  group-hover:border-none h-[80px] md:w-[350px]  flex items-center justify-between">
                <div className="font-bold   text-base">{course.title}</div>
                <div id="logo" className="">
                  {course.icon}
                </div>
              </div>
            </div>
            <div className=" h-32 rounded ">
              <div className="text-start  font-medium pl-4 py-4 ">
                {course.description}
              </div>

              <Link to={course.link}>
                <div className="font-bold gap-4 w-[390px] border-none flex justify-center items-center  hover:text-white bg-[#2a9d8f] hover:bg-[#023047] transition duration-500 p-2">
                  <div className="">
                    <FaLocationArrow className="w-8 h-8 " />
                  </div>{" "}
                  Explore Now
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProfessionalsCourses;
