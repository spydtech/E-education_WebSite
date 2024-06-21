import React, { useState } from "react";
import { SiGooglemeet } from "react-icons/si";
import MeetSlider from "../../Meeting/MeetSlider";
// import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaLayerGroup } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import ApprovalIcon from "@mui/icons-material/Approval";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
const TraineeDashboard = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-white font-bold uppercase">
              Trainee Dashboard
            </span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
                Home
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <FaLayerGroup className="h-6 w-6 mr-2" />
                Courses Group
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <SlCalender className="h-6 w-6 mr-2" />
                Calender
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <TbReportAnalytics className="h-6 w-6 mr-2" />
                Reports
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <ApprovalIcon className="h-6 w-6 mr-2 " />
                Approvals
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <FaUserAlt className="h-6 w-6 mr-2" />
                User
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Navbar */}
              <div className="bg-white shadow">
                <div className="container mx-auto">
                  <div className="flex justify-between items-center py-4 px-2">
                    <h1 className="text-xl font-semibold">Animated Drawer</h1>
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
              </div>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold">
              Welcome to Trainee Dashboard{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default TraineeDashboard;
// import React, { useState } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import {
//   Box,
//   CssBaseline,
//   Drawer,
//   Toolbar,
//   useMediaQuery,
//   useTheme,
//   IconButton,
// } from "@mui/material";
// import { AccountCircle } from "@mui/icons-material";
// import { SiGooglemeet } from "react-icons/si";
// import { MdOutlineDashboardCustomize } from "react-icons/md";
// import { SlCalender } from "react-icons/sl";
// import { FaLayerGroup, FaUserAlt } from "react-icons/fa";
// import { TbReportAnalytics } from "react-icons/tb";
// import { IoSettingsSharp } from "react-icons/io5";
// import ApprovalIcon from "@mui/icons-material/Approval";
// import MenuIcon from "@mui/icons-material/Menu";
// import TraineeHome from "../Home";

// const menu = [
//   { name: "Home", path: "/HomeTrainee", icon: <MdOutlineDashboardCustomize /> },
//   { name: "Courses Group", path: "#", icon: <FaLayerGroup /> },
//   { name: "Calendar", path: "#", icon: <SlCalender /> },
//   { name: "Reports", path: "#", icon: <TbReportAnalytics /> },
//   { name: "Approvals", path: "#", icon: <ApprovalIcon /> },
//   { name: "Settings", path: "#", icon: <IoSettingsSharp /> },
// ];

// const TraineeDashboard = () => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
//   const [sideBarVisible, setSideBarVisible] = useState(false);
//   const navigate = useNavigate();

//   const handleNavigate = (path) => {
//     navigate(path);
//     if (!isLargeScreen) {
//       setSideBarVisible(false);
//     }
//   };

//   const drawerWidth = 250;

//   const drawer = (
//     <Box
//       sx={{
//         overflow: "auto",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         height: "100vh",
//         width: drawerWidth,
//       }}
//       className="bg-gray-800 text-white"
//     >
//       <Toolbar />
//       <div className="flex-grow">
//         <ul className="py-4">
//           {menu.map((item) => (
//             <li key={item.name}>
//               <button
//                 onClick={() => handleNavigate(item.path)}
//                 className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 <span className="font-semibold">{item.name}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 w-full">
//           <AccountCircle />
//           <span className="font-semibold">Account</span>
//         </button>
//       </div>
//     </Box>
//   );

//   return (
//     <div className="flex h-screen">
//       <CssBaseline />
//       <Drawer
//         variant={isLargeScreen ? "permanent" : "temporary"}
//         open={isLargeScreen || sideBarVisible}
//         onClose={() => setSideBarVisible(false)}
//         sx={{
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1 }}>
//         <Toolbar>
//           {!isLargeScreen && (
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={() => setSideBarVisible(true)}
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//           <div className="flex-grow text-center">
//             <h1 className="text-xl font-semibold">Trainee Dashboard</h1>
//           </div>
//           <IconButton color="inherit">
//             <SiGooglemeet />
//           </IconButton>
//         </Toolbar>
//         <Box className="p-4">
//           <Routes>
//             <Route path="/HomeTrainee" element={<TraineeHome />} />
//             {/* Add other routes here */}
//           </Routes>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default TraineeDashboard;
