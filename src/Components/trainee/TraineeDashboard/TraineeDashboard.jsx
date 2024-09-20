

// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SiGooglemeet } from "react-icons/si";
// import MeetSlider from "../../Meeting/MeetSlider";
// import { MdOutlineDashboardCustomize } from "react-icons/md";
// import { SlCalender } from "react-icons/sl";
// import { FaLayerGroup, FaUserAlt } from "react-icons/fa";
// import { TbReportAnalytics } from "react-icons/tb";
// import ApprovalIcon from "@mui/icons-material/Approval";
// import Traineeprofile from "../../../assets/Calender/traineeprofile.png";
// import Eeducationlogo  from "../../../assets/logo/E-educationlogo.png"
// import { IoSettingsSharp } from "react-icons/io5";
// import { RiArrowRightSLine } from "react-icons/ri";
// import Trainee_Home from "../home/Home";
// import Navigation from "../TraineAdmin/navigation/navigation";
// import TraineUpload from "../UserTask/traineuploads";
// import COursesGroup from "../TraineAdmin/CoursesGroup/Tabs";
// import UserAccount from "../UsersSection/usernavigation/navigation";
// import StatusPage from "../UserTask/StatusPage";
// import Calendar from "../TraineeCalendar/Calendar";
// import { getTrainee, logout } from "../../../State/Auth/Action";
// import { useDispatch, useSelector } from "react-redux";


// const TraineeDashboard = () => {
//   const location = useLocation();
//   const redirect = location?.state?.redirect;
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [isLogoutOpen, setLogoutOpen] = useState(false); // State to manage logout options visibility
//   const [isSidebarOpen, setSidebarOpen] = useState(false); // State for mobile sidebar
//   const jwt = localStorage.getItem("jwt");
//   const auth = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState(redirect ? redirect : "home"); // State to manage active tab

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
//   };

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//     if (isSidebarOpen) {
//       setSidebarOpen(false); // Close sidebar on mobile after clicking
//     }
//   };

//   const toggleLogoutOptions = () => {
//     setLogoutOpen(!isLogoutOpen);
//   };

//   useEffect(() => {
//     if (redirect) setActiveTab(redirect);
//   }, [redirect]);

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getTrainee(jwt));
//     }
//   }, [jwt, auth.jwt, dispatch]);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("jwt");
//     navigate("/trainee");
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case "home":
//         return <Trainee_Home />;
//       case "courses":
//         return <COursesGroup />;
//       case "calendar":
//         return <Calendar />;
//       case "reports":
//         return <StatusPage />;
//       case "approvals":
//         return <TraineUpload />;
//       case "user":
//         return <UserAccount />;
//       case "settings":
//         return <Navigation />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <div className="flex h-screen">
//         {/* Sidebar for larger screens */}
//         <div className={`hidden md:flex flex-col w-64 bg-gradient-to-r from-[#4CA1AF] to-[#204349]`}>
         
//           <div className="flex items-center justify-center h-16 bg-gradient-to-r from-[#4CA1AF] to-[#204349]">

//           <img src={Eeducationlogo} className="h-24 w-auto"/>
//           </div>
//           <div className="flex flex-col flex-1 overflow-y-auto">
//             <nav className="flex-1 px-2 py-4">
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "home" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
//                 onClick={() => handleTabClick("home")}
//               >
//                 <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "courses" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
//                 onClick={() => handleTabClick("courses")}
//               >
//                 <FaLayerGroup className="h-6 w-6 mr-2" />
//                 Courses
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "calendar" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
//                 onClick={() => handleTabClick("calendar")}
//               >
//                 <SlCalender className="h-6 w-6 mr-2" />
//                 Calendar
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "reports" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
//                 onClick={() => handleTabClick("reports")}
//               >
//                 <TbReportAnalytics className="h-6 w-6 mr-2" />
//                 Reports
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "approvals" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
//                 onClick={() => handleTabClick("approvals")}
//               >
//                 <ApprovalIcon className="h-6 w-6 mr-2" />
//                 Approvals
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "user" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
//                 onClick={() => handleTabClick("user")}
//               >
//                 <FaUserAlt className="h-6 w-6 mr-2" />
//                 User
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "settings" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
//                 onClick={() => handleTabClick("settings")}
//               >
//                 <IoSettingsSharp className="h-6 w-6 mr-2" />
//                 Settings
//               </a>
//             </nav>
//           </div>

//           {isLogoutOpen && (
//             <div className="w-auto h-14 mx-2 px-2 float-end relative z-10">
//               <div className="flex items-end justify-end space-x-1 mt-2">
//                 {/* <IoMdLogOut className="h-8 w-8 mb-1 text-gray-300" /> */}
//                 <button className="p-2 bg-gray-800 text-[#FF9B26] rounded-md hover:bg-gray-700" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </div>
//             </div>
//           )}
//           {/* Trainee Info */}
//           <div className="flex mb-4 mx-2">
//             {auth.trainee && auth.trainee.firstName ? (
//               <>
//                 <div className="rounded-full text-[#FF9B26] font-bold text-xl border-2 w-12 h-12 flex justify-center items-center">
//                   {auth.trainee.firstName.charAt(0)}
//                 </div>
//                 <span className="px-2 mx-1 mt-3 flex text-[#FF9B26] font-bold">
//                   {auth.trainee.firstName} {auth.trainee.lastName}
//                 </span>
//               </>
//             ) : null}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col flex-1 overflow-y-auto">
//           <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4">
//           {/* <div className=" flex h-10 w-10">
//                  <img src={Traineeprofile}/>
//                 <h2 className="text-nowrap pl-4 pt-2 font-bold text-[#204349] text-[20px]">TraineeName</h2>
//                 </div> */}
//             {/* Move Menu Icon to Left */}
//             <div className="flex items-center">
//               <button className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none" onClick={toggleSidebar}>
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="flex items-center space-x-4">
//               <SiGooglemeet className="h-6 w-6" />
//               <MeetSlider />
//             </div>
//           </div>

//           {/* Sidebar for small screens */}
//           {isSidebarOpen && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleSidebar}>
//               <div className="fixed top-0 left-0 w-64 h-full bg-gradient-to-r from-[#4CA1AF] to-[#204349] p-4 overflow-y-auto">
//                 <div className="flex items-center justify-end">
//                   <button className="text-white" onClick={toggleSidebar}>
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                     </svg>
//                   </button>
//                 </div>
//                 <nav className="flex flex-col space-y-2">
//                   <a
//                     href="#"
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white transition-all duration-300 ${activeTab === "home" ? " text-[#204349]" : "bg-transparent"}`}
//                     onClick={() => handleTabClick("home")}
//                   >
//                     <MdOutlineDashboardCustomize className="h-6 w-6" />
//                     Home
//                   </a>
//                   <a
//                     href="#"
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white transition-all duration-300 ${activeTab === "courses" ? " text-[#204349]" : "bg-transparent"}`}
//                     onClick={() => handleTabClick("courses")}
//                   >
//                     <FaLayerGroup className="h-6 w-6" />
//                     Courses
//                   </a>
//                   <a
//                     href="#"
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white transition-all duration-300 ${activeTab === "calendar" ? " text-[#204349]" : "bg-transparent"}`}
//                     onClick={() => handleTabClick("calendar")}
//                   >
//                     <SlCalender className="h-6 w-6" />
//                     Calendar
//                   </a>
//                   <a
//                     href="#"
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white transition-all duration-300 ${activeTab === "reports" ? " text-[#204349]" : "bg-transparent"}`}
//                     onClick={() => handleTabClick("reports")}
//                   >
//                     <TbReportAnalytics className="h-6 w-6" />
//                     Reports
//                   </a>
//                   <a
//                     href="#"
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white transition-all duration-300 ${activeTab === "approvals" ? " text-[#204349]" : "bg-transparent"}`}
//                     onClick={() => handleTabClick("approvals")}
//                   >
//                     <ApprovalIcon className="h-6 w-6" />
//                     Approvals
//                   </a>
//                   <a
//                     href="#"
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white transition-all duration-300 ${activeTab === "user" ? " text-[#204349]" : "bg-transparent"}`}
//                     onClick={() => handleTabClick("user")}
//                   >
//                     <FaUserAlt className="h-6 w-6" />
//                     User
//                   </a>
//                   <a
//                     href="#"
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white transition-all duration-300 ${activeTab === "settings" ? " text-[#204349]" : "bg-transparent"}`}
//                     onClick={() => handleTabClick("settings")}
//                   >
//                     <IoSettingsSharp className="h-6 w-6" />
//                     Settings
//                   </a>
//                 </nav>
//               </div>
//             </div>
//           )}

//           {/* Main page content rendering based on active tab */}
//           <div className="p-4">{renderContent()}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TraineeDashboard;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate ,Link} from "react-router-dom";
import { SiGooglemeet } from "react-icons/si";
import MeetSlider from "../../Meeting/MeetSlider";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaLayerGroup, FaUserAlt } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import ApprovalIcon from "@mui/icons-material/Approval";
import Traineeprofile from "../../../assets/Calender/traineeprofile.png";
import Eeducationlogo from "../../../assets/logo/E-educationlogo.png";
import { IoSettingsSharp } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import Trainee_Home from "../home/Home";
import Navigation from "../TraineAdmin/navigation/navigation";
import TraineUpload from "../UserTask/traineuploads";
import COursesGroup from "../TraineAdmin/CoursesGroup/Tabs";
import UserAccount from "../UsersSection/usernavigation/navigation";
import StatusPage from "../UserTask/StatusPage";
import Calendar from "../TraineeCalendar/Calendar";
import { getTrainee, logout } from "../../../State/Auth/Action";
import { useDispatch, useSelector } from "react-redux";

const TraineeDashboard = ({ changeTheme, theme }) => {
  const location = useLocation();
  const redirect = location?.state?.redirect;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false); // State to manage logout options visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for mobile sidebar
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(redirect ? redirect : "home"); // State to manage active tab

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (isSidebarOpen) {
      setSidebarOpen(false); // Close sidebar on mobile after clicking
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    // navigate("/trainee"); // Redirect to the login page
  };

  useEffect(() => {
    if (redirect) setActiveTab(redirect);
  }, [redirect]);

  useEffect(() => {
    if (jwt) {
      dispatch(getTrainee(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Trainee_Home />;
      case "courses":
        return <COursesGroup />;
      case "calendar":
        return <Calendar />;
      case "reports":
        return <StatusPage />;
      case "approvals":
        return <TraineUpload />;
      case "user":
        return <UserAccount />;
      case "settings":
        return <Navigation />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar for larger screens */}
        <div className={`hidden md:flex flex-col w-64 bg-gradient-to-r from-[#4CA1AF] to-[#204349]`}>
          <div className="flex items-center justify-center h-16 bg-gradient-to-r from-[#4CA1AF] to-[#204349]">
            <img src={Eeducationlogo} className="h-24 w-auto" alt="E-Education Logo" />
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4">
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "home" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
                onClick={() => handleTabClick("home")}
              >
                <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
                Home
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "courses" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
                onClick={() => handleTabClick("courses")}
              >
                <FaLayerGroup className="h-6 w-6 mr-2" />
                Courses
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "calendar" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
                onClick={() => handleTabClick("calendar")}
              >
                <SlCalender className="h-6 w-6 mr-2" />
                Calendar
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "reports" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
                onClick={() => handleTabClick("reports")}
              >
                <TbReportAnalytics className="h-6 w-6 mr-2" />
                Reports
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "approvals" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
                onClick={() => handleTabClick("approvals")}
              >
                <ApprovalIcon className="h-6 w-6 mr-2" />
                Approvals
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "user" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
                onClick={() => handleTabClick("user")}
              >
                <FaUserAlt className="h-6 w-6 mr-2" />
                User
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "settings" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-white"}`}
                onClick={() => handleTabClick("settings")}
              >
                <IoSettingsSharp className="h-6 w-6 mr-2" />
                Settings
              </a>
              {/* <button
              className="p-2 bg-white px-16  py-2 text-[#4CA1AF] rounded-md hover:bg-white"
             
            >
             ChangeTheme
            </button> */}
            </nav>
            
          </div>

          {/* Logout Button */} 
          <Link to="/trainelogin">
          <div className="flex items-end justify-center p-4">
            <button
              className="p-2 bg-white  px-20 py-2 text-[#4CA1AF] rounded-md hover:bg-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          </Link>

          {/* Trainee Info */}
          <div className="flex mb-4 mx-2">
            {auth.trainee && auth.trainee.firstName ? (
              <>
                <div className="rounded-full text-[#FF9B26] font-bold text-xl border-2 w-12 h-12 flex justify-center items-center">
                  {auth.trainee.firstName.charAt(0)}
                </div>
                <span className="px-2 mx-1 mt-3 flex text-[#FF9B26] font-bold">
                  {auth.trainee.firstName} {auth.trainee.lastName}
                </span>
              </>
            ) : null}
          </div>
        </div>

        {/* Main Content */}
        {/* <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-56 py-4 bg-white border-b border-gray-200 px-4">
          
            <div className="flex items-center">
              <button
                className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={toggleSidebar}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
                <div className=" flex h-10 w-10">
                 <img src={Traineeprofile}/>
                <h2 className="text-nowrap pl-4 pt-2 font-bold text-[#204349] text-[20px]">TraineeName</h2>
                </div> 
            </div>

        
            <div className="flex items-center">
              <SiGooglemeet className="h-6 w-6 text-[#0098F1]" />
            </div>
          </div>

        
          <div className="flex-1 p-4 bg-gray-100">
            {renderContent()}
          </div>
        </div> */} 
        <div className="flex flex-col flex-1 overflow-y-auto">
  <div className="flex flex-col md:flex-row items-center justify-between h-56 py-4 bg-white border-b border-gray-200 px-4">
    <div className="flex items-center md:justify-start  justify-between w-full">
      <button
        className="md:hidden text-gray-500  hover:text-gray-700 focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div className="flex items-center justify-center md:ml-4 mt-4 md:mt-0">
        <img src={Traineeprofile} className="h-10 w-10 rounded-full" alt="Trainee Profile" />
        <h2 className="pl-4 font-bold text-[#204349] text-[20px]">TraineeName</h2>
      </div>
    </div>

    {/* Mobile Menu Toggle */}
    {/* <div className="items-center md:visible   mt-4">
      <SiGooglemeet className="h-6 w-6 text-[#0098F1 ]  " />
    </div> */}
    <div className="items-center hidden md:flex mt-4">
  <SiGooglemeet className="h-6 w-6 text-[#0098F1]" />
</div>

  </div>

  {/* Render Content based on active tab */}
  <div className="flex-1 p-4 bg-gray-100">
    {renderContent()}
  </div>
</div>


        {/* Sidebar for small screens */}
        <div
          className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 transition-opacity md:hidden ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          aria-hidden="true"
        >
          <div className={`fixed inset-0 bg-white w-64 p-4 overflow-y-auto transition-transform ${isSidebarOpen ? "transform-none" : "transform -translate-x-full"}`}>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleSidebar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col mt-8">
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "home" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-[#204349]"}`}
                onClick={() => handleTabClick("home")}
              >
                <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
                Home
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "courses" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-[#204349]"}`}
                onClick={() => handleTabClick("courses")}
              >
                <FaLayerGroup className="h-6 w-6 mr-2" />
                Courses
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "calendar" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-[#204349]"}`}
                onClick={() => handleTabClick("calendar")}
              >
                <SlCalender className="h-6 w-6 mr-2" />
                Calendar
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "reports" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-[#204349]"}`}
                onClick={() => handleTabClick("reports")}
              >
                <TbReportAnalytics className="h-6 w-6 mr-2" />
                Reports
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "approvals" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-[#204349]"}`}
                onClick={() => handleTabClick("approvals")}
              >
                <ApprovalIcon className="h-6 w-6 mr-2" />
                Approvals
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "user" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-[#204349]"}`}
                onClick={() => handleTabClick("user")}
              >
                <FaUserAlt className="h-6 w-6 mr-2" />
                User
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${activeTab === "settings" ? "bg-white text-[#204349] border-[#204349]" : "border-transparent text-[#204349]"}`}
                onClick={() => handleTabClick("settings")}
              >
                <IoSettingsSharp className="h-6 w-6 mr-2" />
                Settings
              </a> 
              <Link to="/trainelogin">
              <button
                className="w-auto mt-4 px-20 py-2 bg-gray-800 text-[#FF9B26] rounded-md hover:bg-gray-700"
                onClick={handleLogout}
              >
                Logout
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraineeDashboard;
