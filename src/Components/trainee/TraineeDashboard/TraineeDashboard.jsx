import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { SiGooglemeet } from "react-icons/si";
import MeetSlider from "../../Meeting/MeetSlider";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaLayerGroup } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import ApprovalIcon from "@mui/icons-material/Approval";
import Traineeprofile from "../../../assets/Calender/traineeprofile.png";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import Trainee_Home from "../home/Home";
import Navigation from "../TraineAdmin/navigation/navigation";
import TraineUpload from "../UserTask/traineuploads";
import COursesGroup from "../TraineAdmin/CoursesGroup/Tabs";
import UserAccount from "../UsersSection/usernavigation/navigation";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import StatusPage from "../UserTask/StatusPage";
import { getTrainee, logout } from "../../../State/Auth/Action";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../TraineeCalendar/Calendar";
const TraineeDashboard = () => {
  const location = useLocation();
  const redirect = location?.state?.redirect;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false); // State to manage logout options visibility
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(redirect ? redirect : "home"); // State to manage active tab
  const trainee = {
    name: "Robin Huion", // Assuming one trainee for now
  };
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const toggleLogoutOptions = () => {
    setLogoutOpen(!isLogoutOpen);
  };
  useEffect(() => {
    if (redirect) setActiveTab(redirect);
  }, [redirect]);

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
  useEffect(() => {
    if (jwt) {
      dispatch(getTrainee(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate("/trainee");
  };
  return (
    <>
      <div className="flex h-screen bg-white w-auto">
        {/* sidebar */}
        <div className="hidden md:flex flex-col w-64 text-[#FF9B26]">
          <div className="flex items-center justify-center h-16 bg-white">
            <span className="text-[#204349] text-[18px] font-bold uppercase">
              Trainee Dashboard
            </span>
          </div>

          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-white">
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full border-l-8 transition-all duration-300 
        ${
          activeTab === "home"
            ? "bg-gradient-to-r from-[#4CA1AF] to-[#204349]  text-white rounded-tr-3xl rounded-br-3xl border-[#204349]"
            : "  text-[#204349]"
        }`}
                onClick={() => handleTabClick("home")}
              >
                <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
                Home
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 
        ${
          activeTab === "courses"
            ? "bg-gradient-to-r from-[#4CA1AF] to-[#204349]  text-white border-[#204349]"
            : " border-transparent  text-[#204349]"
        }`}
                onClick={() => handleTabClick("courses")}
              >
                <FaLayerGroup className="h-6 w-6 mr-2" />
                Courses Group
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 rounded-tr-3xl rounded-br-3xl w-full border-l-8 transition-all duration-300 
        ${
          activeTab === "calendar"
            ? "bg-gradient-to-r from-[#4CA1AF] to-[#204349] text-white border-[#204349]"
            : " border-transparent  text-[#204349]"
        }`}
                onClick={() => handleTabClick("calendar")}
              >
                <SlCalender className="h-6 w-6 mr-2" />
                Calendar
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 
        ${
          activeTab === "reports"
            ? "bg-gradient-to-r from-[#4CA1AF] to-[#204349] text-white border-[#204349]"
            : "border-transparent  text-[#204349]"
        }`}
                onClick={() => handleTabClick("reports")}
              >
                <TbReportAnalytics className="h-6 w-6 mr-2" />
                Reports
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 
        ${
          activeTab === "approvals"
            ? "bg-gradient-to-r from-[#4CA1AF] to-[#204349] text-white border-[#204349]"
            : "  text-[#204349]"
        }`}
                onClick={() => handleTabClick("approvals")}
              >
                <ApprovalIcon className="h-6 w-6 mr-2" />
                Approvals
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 rounded-tr-3xl rounded-br-3xl py-4 w-full border-l-8 transition-all duration-300 
        ${
          activeTab === "user"
            ? "bg-gradient-to-r from-[#4CA1AF] to-[#204349] text-white border-[#204349]"
            : " border-transparent  text-[#204349]"
        }`}
                onClick={() => handleTabClick("user")}
              >
                <FaUserAlt className="h-6 w-6 mr-2" />
                User
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 rounded-tr-3xl rounded-br-3xl py-4 w-full border-l-8 transition-all duration-300 
        ${
          activeTab === "settings"
            ? "bg-gradient-to-r from-[#4CA1AF] to-[#204349] text-white border-[#204349]"
            : "hover:bg-[#204349] hover:bg-opacity-10 border-transparent hover:border-[#204349] text-[#204349]"
        }`}
                onClick={() => handleTabClick("settings")}
              >
                <IoSettingsSharp className="h-6 w-6 mr-2" />
                Settings
              </a>
            </nav>
          </div>

          {isLogoutOpen && (
            <div className="w-auto h-14 mx-2 px-2 float-end  relative z-10">
              <div className="flex items-end justify-end space-x-1 mt-2">
                <IoMdLogOut className="h-8 w-8 mb-1  text-gray-300" />{" "}
                <button
                  className=" p-2 bg-gray-800 text-[#FF9B26]  rounded-md hover:bg-gray-700"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          <div className=" flex mb-4 mx-2">
            {auth.trainee && auth.trainee.firstName ? (
              <>
                <div className="rounded-full text-[#FF9B26] font-bold text-xl border-2 w-12 h-12 flex justify-center items-center ">
                  {auth.trainee.firstName.charAt(0)}
                </div>
                <span className="px-2 mx-1 mt-3 flex text-[#FF9B26] font-bold">
                  {auth.trainee.firstName} {auth.trainee.lastName}
                </span>
              </>
            ) : (
              <div className="flex items-center">
                <span className="text-[#204349] font-bold">Loading...</span>
              </div>
            )}
            <RiArrowRightSLine
              className=" w-6 h-6 text-[#204349] mt-[13px] cursor-pointer"
              onClick={toggleLogoutOptions}
            />
          </div>
        </div>
        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
              <div className=" flex h-10 w-10">
                <img src={Traineeprofile} />
                <h2 className="text-nowrap pl-4 pt-2 font-bold text-[#204349] text-[20px]">
                  TraineeName
                </h2>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-4 h-16"></div>
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
          <div className="p-4">{renderContent()}</div>
        </div>
      </div>
    </>
  );
};

export default TraineeDashboard;
