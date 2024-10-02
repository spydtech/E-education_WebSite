


import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import AdminDashBoard from "./AdminDashBoard";
import Orders from "../Views/Orders";
import { TbLockAccess } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { SiGooglemeet } from "react-icons/si";
import PaymentDashboard from "./pymentData/MainDashBoard";
import SealsReports from "./Reports/TableforAdmin";
import IMG from "../../assets/logo/E-educationlogo.png";
import CreateGroup from "../Views/FilterUsers";
import ExistingGroup from "../Views/TraineeCourses";
import { AccountCircle, ExpandLess, ExpandMore } from "@mui/icons-material";
import AccessField from "./AccessField";
import RegisterEmployee from "./Register/RegisterEmployee";
import RegisterTrainee from "./Register/RegisterTraniee";
import Meeting from "./Meet/Meeting";
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { IoCloseCircle } from "react-icons/io5";
import Switch from "@mui/material/Switch";
// import girl from "../../assetss/Home/Admin.png";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "../../Components/trainee/TraineeDashboard/Theamtoggle"; 
const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <DashboardIcon className="w-6 h-6 mr-2" />,
  },
  {
    name: "Access Field",
    path: "/admin/accessField",
    icon: <TbLockAccess className="w-6 h-6 mr-2" />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <UsersIcon className="w-6 h-6 mr-2" />,
    subMenu: [
      { name: "Create Group", path: "/admin/users/create-group" },
      { name: "Go to Existing Group", path: "/admin/users/existing-group" },
    ],
  },
  {
    name: "Payment Data",
    path: "/admin/payment-data",
    icon: <MdOutlinePayment className="w-6 h-6 mr-2" />,
  },
  {
    name: "Sales Report",
    path: "/admin/sales-report",
    icon: <TbReport className="w-6 h-6 mr-2" />,
  },
  {
    name: "Meet",
    path: "/admin/meeting",
    icon: <SiGooglemeet className="w-5 h-5 mr-3" />,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: <SettingsIcon className="w-6 h-6 mr-2" />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [profilePic, setProfilePic] = useState(); // State for profile picture
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const drawerWidth = 230;
  const themes= localStorage.getItem("theme");

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleDrawerToggle = () => {
    setSideBarVisible(!sideBarVisible);
  };

  const closeSidebar = () => {
    setSideBarVisible(false);
  };

  const handleLogout = () => {
    // Perform logout actions (e.g., clear auth tokens)
    navigate("/admin_login"); // Navigate to the login page
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // Update the profile picture
      };
      reader.readAsDataURL(file);
    }
  };

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        width: drawerWidth,
      }}
      className={` ${themes === "dark" ? "bg-black text-white" : "text-[#4CA1AF] "}  max-w-62 lg:block border-[#001510] border-opacity-10 border-r-2 `}
    >
      {/* Sidebar Logo */}
      <div className="py-4 flex relative">
        <div className="pl-2">
          <img className="h-[78px] w-auto" src={IMG} alt="Logo" />
        </div>
        {isSmallScreen && (
          <button className="absolute top-2 right-2" onClick={closeSidebar}>
            <IoCloseCircle className="text-3xl text-white" />
          </button>
        )}
      </div>

      {/* Sidebar Admin Info for Small Screen */}
      {isSmallScreen && (
        <div className="p-2">
          <div className="flex items-center mb-4">
            <div className="w-[60px] h-[60px] rounded-full bg-white cursor-pointer">
              <img className="w-[60px] h-[60px] rounded-full" src={profilePic} onClick={() => document.getElementById('fileInput').click()} />
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleProfilePicChange}
              />
            </div>
            <span className="text-white font-medium text-xl ml-2">Admin Name</span>
          </div>
        </div>
      )}

      <div className="flex-grow">
        <ul>
          {menu.map((item, index) => (
            <li key={item.name} className="relative">
              <button
                onClick={() => {
                  if (item.subMenu) {
                    toggleSubMenu(index);
                  } else {
                    navigate(item.path);
                  }
                }}
                className="flex items-center px-4 py-3 hover:bg-white hover:text-black hover:bg-opacity-80 w-full border-l-8 border-transparent hover:border-[#001510] transition-all duration-300 rounded-r-2xl"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-semibold">{item.name}</span>
                {item.subMenu && (
                  <span className="ml-auto">
                    {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
                  </span>
                )}
              </button>
              {item.subMenu && openSubMenu === index && (
                <ul>
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.name} className="relative">
                      <button
                        onClick={() => navigate(subItem.path)}
                        className="flex items-center space-x-2 px-4 py-3 hover:bg-white hover:text-black hover:bg-opacity-80 w-full border-l-8 border-transparent hover:border-[#001510] transition-all duration-300 rounded-r-2xl"
                      >
                        <span className="font-semibold text-nowrap pl-10">
                          {subItem.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
           {!isSmallScreen && (
        <div className="flex relative justify-center">
         <ThemeToggle/>
        </div>
      )}
        </ul>
      </div>

      {/* Logout Button */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 w-full text-red-600 hover:bg-white hover:text-black transition-all duration-300 rounded-md"
        >
          <span className="font-semibold">Logout</span>
        </button>
      </div>

      {/* Dark Mode Switch for Large Screens */}
     
    </Box>
  );
  // const themes= localStorage.getItem("theme")
  return (
    <div className="flex h-screen relative">
      <CssBaseline />
      {isSmallScreen && (
        <AiOutlineMenu
          onClick={handleDrawerToggle}
          className="text-3xl md:hidden mt-4 ml-4 font-medium absolute flex text-black"
        />
      )}

      {(isSmallScreen ? sideBarVisible : true) && (
        <div
          className={`fixed inset-0 z-40 ${sideBarVisible || !isSmallScreen ? "block" : "hidden"} md:static md:block`}
          style={{ width: drawerWidth }}
        >
          {drawer}
        </div>
      )}

      {/* Navbar */}
      <div className="flex-grow h-screen overflow-auto ">
        <Box component="header" className={` ${themes==="dark"&&"bg-black text-white"} p-4 flex items-center justify-between `}>
          {!isSmallScreen && (
            <div className="flex items-center px-4  space-x-2">
              <div className="w-[60px] h-[60px] rounded-full bg-white cursor-pointer">
                <img className="w-[60px] h-[60px] rounded-full" src={profilePic} onClick={() => document.getElementById('fileInput').click()} />
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={handleProfilePicChange}
                />
              </div>
              <span className="bg-gradient-to-r from-[#00BF8F] to-[#001510] text-transparent bg-clip-text font-semibold text-lg">
                Admin Name
              </span>
            </div>
          )}

          {/* Dark Mode Switch for Small Screens */}
          {isSmallScreen && (
            <div className="relative flex w-full justify-end">
              <span className="text-xl mr-2">Dark Mode:</span>
             <ThemeToggle/>
            </div>
          )}
        </Box>

        <Routes>
          <Route path="/" element={<AdminDashBoard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment-data" element={<PaymentDashboard />} />
          <Route path="/sales-report" element={<SealsReports />} />
          <Route path="/create-group" element={<CreateGroup />} />
          <Route path="/existing-group" element={<ExistingGroup />} />
          <Route path="/accessField" element={<AccessField />} />
          <Route path="/register-employee" element={<RegisterEmployee />} />
          <Route path="/register-trainee" element={<RegisterTrainee />} />
          <Route path="/meeting" element={<Meeting />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;



