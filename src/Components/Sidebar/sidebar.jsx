// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   BsFillHouseFill,
//   BsFillGearFill,
//   BsCheckCircleFill,
//   BsFillCalendarFill,
//   BsFillBookFill,
//   BsFillBellFill,
// } from "react-icons/bs";
// import { PiStudentBold } from "react-icons/pi";
// import "../../App.css";

// // Importing components for each section
// import Header from "../Header/header";
// // import AccountSettings from "./AccountSettings";
// // import AccountSettings from "../profilesection/ProfileSection";
// // import Approvals from "./Approvals";

// function Sidebar({ openSidebarToggle, OpenSidebar }) {
//   const sections = [
//     { name: "Home", icon: <BsFillHouseFill className="icon" /> },
//     { name: "Account Settings", icon: <BsFillGearFill className="icon" /> },
//     { name: "Approvals", icon: <BsCheckCircleFill className="icon" /> },
//     { name: "Calendar", icon: <BsFillCalendarFill className="icon" /> },
//     { name: "Courses Group", icon: <BsFillBookFill className="icon" /> },
//     { name: "Notification", icon: <BsFillBellFill className="icon" /> },
//   ];

//   const [currentSection, setCurrentSection] = useState(0);

//   useEffect(() => {
//     const sectionId = sections[currentSection].name.replace(" ", "-");
//     const sectionElement = document.getElementById(sectionId);
//     if (sectionElement) {
//       sectionElement.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//         inline: "start",
//       });
//     }
//   }, [currentSection, sections]);

//   const handleSectionClick = (index) => {
//     setCurrentSection(index);
//     if (openSidebarToggle) OpenSidebar(); // Close sidebar if open
//   };

//   return (
//     <div className="flex">
//       <aside
//         id="sidebar"
//         className={`${
//           openSidebarToggle ? "sidebar-responsive" : ""
//         } sidebar-container`}
//       >
//         <div className="sidebar-title">
//           <div className="sidebar-brand">
//             <PiStudentBold className="icon_header" /> Trainee
//           </div>
//           <span className="icon close_icon" onClick={OpenSidebar}>
//             X
//           </span>
//         </div>

//         <ul className="sidebar-list">
//           {sections.map((section, index) => (
//             <li
//               key={index}
//               className={`sidebar-list-item ${
//                 currentSection === index ? "active" : ""
//               }`}
//               onClick={() => handleSectionClick(index)}
//             >
//               <Link to="#">
//                 {section.icon} {section.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <div className="main-content">
//         {currentSection === 0 && <Header />}
//         {currentSection === 1 && <AccountSettings />}
//         {/* {currentSection === 2 && <Approvals />}
//         {currentSection === 3 && <Calendar />}
//         {currentSection === 4 && <CoursesGroup />}
//         {currentSection === 5 && <Notifications />} */}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
