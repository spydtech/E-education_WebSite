// import React,{useState} from 'react'
// import { SiGooglemeet } from "react-icons/si";
// import MeetSlider from '../../Meeting/MeetSlider';
// // import { RiDashboardHorizontalFill } from "react-icons/ri";
// import { MdOutlineDashboardCustomize } from "react-icons/md";
// import { SlCalender } from "react-icons/sl";
// import { FaLayerGroup } from "react-icons/fa";
// import { TbReportAnalytics } from "react-icons/tb";
// import ApprovalIcon from '@mui/icons-material/Approval';
// import { FaUserAlt } from "react-icons/fa";
// import { IoSettingsSharp } from "react-icons/io5";
// import Trainee_Home from "../home/Home" 
// const TraineeDashboard = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };
//   return (
//     <>
//     <div className="flex h-screen bg-gray-100">
//   {/* sidebar */}
//   <div className="hidden md:flex flex-col w-64 bg-gray-800">
//     <div className="flex items-center justify-center h-16 bg-gray-900">
//       <span className="text-white font-bold uppercase">Trainee Dashboard</span>
//     </div>
//     <div className="flex flex-col flex-1 overflow-y-auto">
//       <nav className="flex-1 px-2 py-4 bg-gray-800">
//         <a
//           href=""
//           className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
//         >
//           <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
//         Home
//         </a>
//         <a
//           href="#"
//           className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
//         >
//           {/* <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 mr-2"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokelinecap="round"
//               strokelinejoin="round"
//               d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
//             />
//           </svg> */}
//           <FaLayerGroup className="h-6 w-6 mr-2"  />
//           Courses Group
//         </a>
//         <a
//           href="#"
//           className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
//         >
//           {/* <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 mr-2"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokelinecap="round"
//               strokelinejoin="round"
//               d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
//             />
//           </svg> */}
//           <SlCalender className="h-6 w-6 mr-2"  />
//           Calender
//         </a>
//         <a
//           href="#"
//           className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
//         >
//           {/* <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 mr-2"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokelinecap="round"
//               strokelinejoin="round"
//               d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
//             />
//           </svg> */}
//           <TbReportAnalytics className="h-6 w-6 mr-2" />
//           Reports
//         </a>
//         <a
//           href="#"
//           className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
//         >
//           {/* <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 mr-2"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokelinecap="round"
//               strokelinejoin="round"
//               d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
//             />
//           </svg> */}
//           <ApprovalIcon className="h-6 w-6 mr-2 "  />
//           Approvals
//         </a>
//         <a
//           href="#"
//           className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
//         >
//           {/* <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 mr-2"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokelinecap="round"
//               strokelinejoin="round"
//               d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
//             />
//           </svg> */}
//           <FaUserAlt className="h-6 w-6 mr-2"  />
//           User
//         </a>
//         <a
//           href="#"
//           className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
//         >
//           {/* <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 mr-2"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M13 10V3L4 14h7v7l9-11h-7z"
//             />
//           </svg> */}
//           <IoSettingsSharp className="h-6 w-6 mr-2" />
//           Settings
//         </a>
//       </nav>
//     </div>
//   </div>
//   {/* Main content */}
//   <div className="flex flex-col flex-1 overflow-y-auto">
//     <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
//       <div className="flex items-center px-4">
//         <button className="text-gray-500 focus:outline-none focus:text-gray-700">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//         {/* <input
//           className="mx-4 w-full border rounded-md px-4 py-2"
//           type="text"
//           placeholder="Search"
//         /> */}
//       </div>
    
//    <div className="flex-1 flex flex-col overflow-hidden">
//           {/* Navbar */}
//           <div className="bg-white shadow">
//             <div className="container mx-auto">
//               <div className="flex justify-between items-center py-4 px-2">
//                 <h1 className="text-xl font-semibold">Animated Drawer</h1>
//                 <button
//                   className="text-gray-500 hover:text-gray-600"
//                   id="open-sidebar"
//                   onClick={toggleDrawer}
                
//                 >
//             <SiGooglemeet />
//                 </button>
//                 <MeetSlider isOpen={isDrawerOpen} onClose={toggleDrawer} />
//               </div>
//             </div>
//           </div>
        
//         </div>




//     </div>
//     <div className="p-4">
//      <Trainee_Home />
//     </div> 
//   </div>
// </div>

//     </>
//   )
// }

// export default TraineeDashboard


import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import { SiGooglemeet } from 'react-icons/si';
import MeetSlider from '../../Meeting/MeetSlider';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { FaLayerGroup } from 'react-icons/fa';
import { TbReportAnalytics } from 'react-icons/tb';
import ApprovalIcon from '@mui/icons-material/Approval';
import { FaUserAlt } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import Trainee_Home from '../home/Home';
import Navigation from "../TraineAdmin/navigation/navigation"
import TraineUpload from "../UserTask/traineuploads"
import COursesGroup from "../TraineAdmin/CoursesGroup/Tabs"
import UserAccount from "../UsersSection/usernavigation/navigation"
import Calendar from '../Calendar/Calendar';
const TraineeDashboard = () => {
  const location = useLocation();
  const redirect = location?.state?.redirect;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(redirect?redirect:"home"); // State to manage active tab

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(()=>{
    if(redirect) setActiveTab(redirect);
  }, [redirect]);
 
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Trainee_Home />;
      case 'courses':
        return <COursesGroup />;
      case 'calendar':
        return <Calendar />;
      case 'reports':
        return <div>Reports Content</div>;
      case 'approvals':
        return <TraineUpload />;
      case 'user':
        return <UserAccount />;
      case 'settings':
        return <Navigation />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-white font-bold uppercase">Trainee Dashboard</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              <a
                href="#"
                className={`flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === 'home' && 'bg-gray-700'
                }`}
                onClick={() => handleTabClick('home')}
              >
                <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
                Home
              </a>
              <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === 'courses' && 'bg-gray-700'
                }`}
                onClick={() => handleTabClick('courses')}
              >
                <FaLayerGroup className="h-6 w-6 mr-2" />
                Courses Group
              </a>
              <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === 'calendar' && 'bg-gray-700'
                }`}
                onClick={() => handleTabClick('calendar')}
              >
                <SlCalender className="h-6 w-6 mr-2" />
                Calendar
              </a>
              <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === 'reports' && 'bg-gray-700'
                }`}
                onClick={() => handleTabClick('reports')}
              >
                <TbReportAnalytics className="h-6 w-6 mr-2" />
                Reports
              </a>
              <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === 'approvals' && 'bg-gray-700'
                }`}
                onClick={() => handleTabClick('approvals')}
              >
                <ApprovalIcon className="h-6 w-6 mr-2 " />
                Approvals
              </a>
              <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === 'user' && 'bg-gray-700'
                }`}
                onClick={() => handleTabClick('user')}
              >
                <FaUserAlt className="h-6 w-6 mr-2" />
                User
              </a>
              <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === 'settings' && 'bg-gray-700'
                }`}
                onClick={() => handleTabClick('settings')}
              >
                <IoSettingsSharp className="h-6 w-6 mr-2" />
                Settings
              </a>
            </nav>
          </div>
        </div>
        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
              <button className="text-gray-500 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center px-4 h-16">
              <h1 className="text-xl font-semibold">Trainee Dashboard</h1>
            </div>
            <div className="flex items-center px-4">
              <button
                className="text-gray-500 hover:text-gray-600"
                id="open-sidebar"
                onClick={toggleDrawer}
              >
                <SiGooglemeet />
              </button>
              <MeetSlider isOpen={isDrawerOpen} onClose={toggleDrawer} />
            </div>
          </div>
          <div className="p-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default TraineeDashboard;
