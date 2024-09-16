// import React, { useState } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import {
//   Box,
//   CssBaseline,
//   Toolbar,
//   IconButton,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import AdminDashBoard from "./AdminDashBoard";
// import Orders from "../Views/Orders";
// import { TbLockAccess } from "react-icons/tb";
// import { MdOutlinePayment } from "react-icons/md";
// import { TbReport } from "react-icons/tb";
// import { SiGooglemeet } from "react-icons/si";
// import PaymentDashboard from "./pymentData/MainDashBoard";
// import SealsReports from "./Reports/TableforAdmin";
// import CreateGroup from "../Views/FilterUsers";
// import ExistingGroup from "../Views/TraineeCourses";
// import { AccountCircle, ExpandLess, ExpandMore } from "@mui/icons-material";
// import AccessField from "./AccessField";
// import RegisterEmployee from "./Register/RegisterEmployee";
// import RegisterTrainee from "./Register/RegisterTraniee";
// import Meeting from "./Meet/Meeting";
// import {
//   Dashboard as DashboardIcon,
//   People as UsersIcon,
//   Settings as SettingsIcon,
// } from "@mui/icons-material";

// const menu = [
//   {
//     name: "Dashboard",
//     path: "/admin",
//     icon: <DashboardIcon className="w-6 h-6" />,
//   },
//   {
//     name: "Access Field",
//     path: "/admin/accessField",
//     icon: <TbLockAccess className="w-6 h-6" />,
//   },
//   {
//     name: "Users",
//     path: "/admin/users",
//     icon: <UsersIcon />,
//     subMenu: [
//       { name: "Create Group", path: "/admin/users/create-group" },
//       { name: "Go to Existing Group", path: "/admin/users/existing-group" },
//     ],
//   },
//   {
//     name: "Payment Data",
//     path: "/admin/payment-data",
//     icon: <MdOutlinePayment className="w-6 h-6" />,
//   },
//   {
//     name: "Sales Report",
//     path: "/admin/sales-report",
//     icon: <TbReport className="w-6 h-6" />,
//   },
//   {
//     name: "Meet",
//     path: "/admin/meeting",
//     icon: <SiGooglemeet className="w-6 h-6" />,
//   },
//   { name: "Settings", path: "/admin/settings", icon: <SettingsIcon /> },
// ];

// const Admin = () => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
//   const [sideBarVisible, setSideBarVisible] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState(null);
//   const navigate = useNavigate();

//   const drawerWidth = isLargeScreen ? 250 : "50vw";

//   const toggleSubMenu = (index) => {
//     setOpenSubMenu(openSubMenu === index ? null : index);
//   };

//   const toggleSidebar = () => {
//     setSideBarVisible(!sideBarVisible);
//   };

//   const drawer = (
//     <Box
//       sx={{
//         overflow: "auto",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         height: "100vh",
//         width: drawerWidth,
//         position: isLargeScreen ? "relative" : "absolute",
//         left: sideBarVisible ? "0" : "-100%",
//         transition: "left 0.3s ease-in-out",
//         zIndex: 10,
//       }}
//       className="bg-white border-[#0098f1] border-opacity-10 border-r-2 text-[#0098f1]"
//     >
//       <Toolbar>
//         {!isLargeScreen && (
//           <IconButton onClick={toggleSidebar} sx={{ marginLeft: "auto" }}>
//             <CloseIcon />
//           </IconButton>
//         )}
//       </Toolbar>
//       <div className="flex-grow ">
//         <ul className="py-8 ">
//           {menu.map((item, index) => (
//             <li key={item.name} className="relative">
//               <button
//                 onClick={() => {
//                   if (item.subMenu) {
//                     toggleSubMenu(index);
//                   } else {
//                     navigate(item.path);
//                   }
//                 }}
//                 className="flex items-center space-x-2 px-4 py-2 hover:bg-[#0098f1] hover:bg-opacity-10 w-full border-l-8 border-transparent hover:border-[#0098f1] transition-all duration-300"
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 <span className="font-semibold">{item.name}</span>
//                 {item.subMenu && (
//                   <span className="ml-auto">
//                     {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
//                   </span>
//                 )}
//               </button>
//               {item.subMenu && openSubMenu === index && (
//                 <ul>
//                   {item.subMenu.map((subItem) => (
//                     <li key={subItem.name} className="relative">
//                       <button
//                         onClick={() => navigate(subItem.path)}
//                         className="flex items-center space-x-2 px-4 py-2 hover:bg-[#0098f1] hover:bg-opacity-10 w-full border-l-8 border-transparent hover:border-[#0098f1] transition-all duration-300"
//                       >
//                         <span className="font-semibold pl-10">
//                           {subItem.name}
//                         </span>
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Box>
//   );

//   return (
//     <div className="flex h-screen relative">
//       <CssBaseline />
//       {!isLargeScreen && (
//         <IconButton
//           onClick={toggleSidebar}
//           sx={{ position: "absolute", top: "10px", left: "10px", zIndex: 20 }}
//         >
//           <MenuIcon />
//         </IconButton>
//       )}
//       <div className={`flex-shrink-0 ${!isLargeScreen && sideBarVisible ? 'block' : 'hidden'}`}>
//         {drawer}
//       </div>
//       {isLargeScreen && <div className="flex-shrink-0">{drawer}</div>}
//       <div className="flex-grow h-screen overflow-auto">
//         <Box component="main" className="p-0">
//           <Routes>
//             <Route path="/" element={<AdminDashBoard />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/accessField" element={<AccessField />} />
//             <Route path="/register-trainee" element={<RegisterTrainee />} />
//             <Route path="/register-employee" element={<RegisterEmployee />} />
//             <Route path="/sales-report" element={<SealsReports />} />
//             <Route path="/meeting" element={<Meeting />} />
//             <Route path="/payment-data" element={<PaymentDashboard />} />
//             <Route path="/users/create-group" element={<CreateGroup />} />
//             <Route path="/users/existing-group" element={<ExistingGroup />} />
//           </Routes>
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default Admin;





// import React, { useState } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import {
//   Box,
//   CssBaseline,
//   Toolbar,
//   IconButton,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import AdminDashBoard from "./AdminDashBoard";
// import Orders from "../Views/Orders";
// import { TbLockAccess } from "react-icons/tb";
// import { MdOutlinePayment } from "react-icons/md";
// import { TbReport } from "react-icons/tb";
// import { SiGooglemeet } from "react-icons/si";
// import PaymentDashboard from "./pymentData/MainDashBoard";
// import SealsReports from "./Reports/TableforAdmin";
// import CreateGroup from "../Views/FilterUsers";
// import ExistingGroup from "../Views/TraineeCourses";
// import { AccountCircle, ExpandLess, ExpandMore } from "@mui/icons-material";
// import AccessField from "./AccessField";
// import RegisterEmployee from "./Register/RegisterEmployee";
// import RegisterTrainee from "./Register/RegisterTraniee";
// import Meeting from "./Meet/Meeting";
// import {
//   Dashboard as DashboardIcon,
//   People as UsersIcon,
//   ShoppingCart as OrdersIcon,
//   Settings as SettingsIcon,
// } from "@mui/icons-material";

// const menu = [
//   {
//     name: "Dashboard",
//     path: "/admin",
//     icon: <DashboardIcon className="w-6 h-6" />,
//   },
//   {
//     name: "Access Field",
//     path: "/admin/accessField",
//     icon: <TbLockAccess className="w-6 h-6" />,
//   },
//   {
//     name: "Users",
//     path: "/admin/users",
//     icon: <UsersIcon />,
//     subMenu: [
//       { name: "Create Group", path: "/admin/users/create-group" },
//       { name: "Go to Existing Group", path: "/admin/users/existing-group" },
//     ],
//   },
//   {
//     name: "Payment Data",
//     path: "/admin/payment-data",
//     icon: <MdOutlinePayment className="w-6 h-6" />,
//   },
//   {
//     name: "Sales Report",
//     path: "/admin/sales-report",
//     icon: <TbReport className="w-6 h-6" />,
//   },
//   {
//     name: "Meet",
//     path: "/admin/meeting",
//     icon: <SiGooglemeet className="w-6 h-6" />,
//   },
//   { name: "Settings", path: "/admin/settings", icon: <SettingsIcon /> },
// ];

// const Admin = () => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
//   const [sideBarVisible, setSideBarVisible] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState(null);
//   const navigate = useNavigate();

//   const drawerWidth = isLargeScreen ? 250 : "50vw";

//   const toggleSubMenu = (index) => {
//     setOpenSubMenu(openSubMenu === index ? null : index);
//   };

//   const toggleSidebar = () => {
//     setSideBarVisible(!sideBarVisible);
//   };

//   const drawer = (
//     <Box
//       sx={{
//         overflow: "auto",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         height: "100vh",
//         width: drawerWidth,
//         position: isLargeScreen ? "relative" : "absolute",
//         left: sideBarVisible ? "0" : "-100%",
//         transition: "left 0.3s ease-in-out",
//         zIndex: 10,
//       }}
//       className="bg-white border-[#0098f1] border-opacity-10 border-r-2 text-[#0098f1]"
//     >
//       <Toolbar>
//         {!isLargeScreen && (
//           <IconButton onClick={toggleSidebar} sx={{ marginLeft: "auto" }}>
//             <CloseIcon />
//           </IconButton>
//         )}
//       </Toolbar>
//       <div className="flex-grow ">
//         <ul className="py-8 ">
//           {menu.map((item, index) => (
//             <li key={item.name} className="relative">
//               <button
//                 onClick={() => {
//                   if (item.subMenu) {
//                     toggleSubMenu(index);
//                   } else {
//                     navigate(item.path);
//                   }
//                 }}
//                 className="flex items-center space-x-2 px-4 py-2 hover:bg-[#0098f1] hover:bg-opacity-10 w-full border-l-8 border-transparent hover:border-[#0098f1] transition-all duration-300"
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 <span className="font-semibold">{item.name}</span>
//                 {item.subMenu && (
//                   <span className="ml-auto">
//                     {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
//                   </span>
//                 )}
//               </button>
//               {item.subMenu && openSubMenu === index && (
//                 <ul>
//                   {item.subMenu.map((subItem) => (
//                     <li key={subItem.name} className="relative">
//                       <button
//                         onClick={() => navigate(subItem.path)}
//                         className="flex items-center space-x-2 px-4 py-2 hover:bg-[#0098f1] hover:bg-opacity-10 w-full border-l-8 border-transparent hover:border-[#0098f1] transition-all duration-300"
//                       >
//                         <span className="font-semibold pl-10">
//                           {subItem.name}
//                         </span>
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Box>
//   );

//   return (
//     <div className="flex h-screen relative">
//       <CssBaseline />
//       {!isLargeScreen && (
//         <IconButton
//           onClick={toggleSidebar}
//           sx={{ position: "absolute", top: "10px", left: "10px", zIndex: 20 }}
//         >
//           <MenuIcon />
//         </IconButton>
//       )}
//       <div className="flex-shrink-0">
//         {drawer}
//       </div>
//       <div className="flex-grow h-screen overflow-auto">
//         <Box component="main" className="p-0">
//           <Routes>
//             <Route path="/" element={<AdminDashBoard />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/accessField" element={<AccessField />} />
//             <Route path="/register-trainee" element={<RegisterTrainee />} />
//             <Route path="/register-employee" element={<RegisterEmployee />} />
//             <Route path="/sales-report" element={<SealsReports />} />
//             <Route path="/meeting" element={<Meeting />} />
//             <Route path="/payment-data" element={<PaymentDashboard />} />
//             <Route path="/users/create-group" element={<CreateGroup />} />
//             <Route path="/users/existing-group" element={<ExistingGroup />} />
//           </Routes>
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default Admin;




import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import adminimg from "../../assetss/profile/boy.png";
import AdminDashBoard from "./AdminDashBoard";
import Orders from "../Views/Orders";
// import Users from "../Views/FilterUsers";
import { TbLockAccess } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";

import { TbReport } from "react-icons/tb";
import { SiGooglemeet } from "react-icons/si";
import PaymentDashboard from "./pymentData/MainDashBoard";
import SealsReports from "./Reports/TableforAdmin";
import IMG from "../../assets/logo/E-eLogo.png";
import CreateGroup from "../Views/FilterUsers";
import ExistingGroup from "../Views/TraineeCourses";
import { AccountCircle, ExpandLess, ExpandMore } from "@mui/icons-material";
import AccessField from "./AccessField";
import RegisterEmployee from "./Register/RegisterEmployee";
import RegisterTrainee from "./Register/RegisterTraniee";
// import SalesReport from "./SalesReport";
import Meeting from "./Meet/Meeting";
// import PaymentData from "./PaymentData";
// import TotalSales from "./TotalSales";
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  ShoppingCart as OrdersIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

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
    name: "payment Data",
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
  { name: "Settings", path: "/admin/settings", icon: <SettingsIcon className="w-6 h-6 mr-2" /> },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navigate = useNavigate();

  const drawerWidth = isLargeScreen ? 250 : "50vw";

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
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
      className="bg-gradient-to-b from-[#001510]  to-[#00BF8F]
 max-w-56 border-[#2C3E50] border-opacity-10 border-r-2 text-white"
    >
       <div className="p-4">
     <img className="h-16 w-auto" src={IMG} alt="Logo" />
     </div>
      {/* {isLargeScreen && <Toolbar/>} */}
      
      <div className="flex-grow ">
        <ul className="">
          
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
                className="flex items-center  px-4 py-2 hover:bg-[#2C3E50] hover:bg-opacity-10 w-full border-l-8 border-transparent hover:border-[#2C3E50] transition-all duration-300"
              >
                <span className="text-lg ">{item.icon}</span>
                <span className="font-semibold">{item.name}</span>
                {item.subMenu && (
                  <span className="ml-auto">
                    {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
                  </span>
                )}
              </button>
              {item.subMenu && openSubMenu === index && (
                <ul className="">
                  
                  {item.subMenu.map((subItem) => (
                    
                    <li key={subItem.name} className="relative ">
                      
                      <button
                        onClick={() => navigate(subItem.path)}
                        className="flex items-center space-x-2 px-2 py-2 hover:bg-[#2C3E50] hover:bg-opacity-10 w-full border-l-8 border-transparent hover:border-[#2C3E50] transition-all duration-300"
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
        </ul>
      </div>
      {/* <div> background: linear-gradient(180deg, #001510 0%, #00BF8F 100%);

        <button className="flex items-center pl-20 py-2 hover:bg-[#f6ac14] hover:bg-opacity-10 w-full border-l-8 border-transparent hover:border-[#f6ac14] transition-all duration-300">
          <AccountCircle />
          <span className="font-semibold pl-2 ">Account</span>
        </button>
      </div> */}
    </Box>
  );

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <div className="flex  h-screen  ">
      {/* <CssBaseline /> */}
      <div
        className={`bg-white   text-[#2C3E50] ${
          drawerVariant === "temporary" && !sideBarVisible
            ? "-left-64"
            : `w-${drawerWidth}`
        }`}
      >
        {drawer}
      </div>
      <div className="flex-grow h-screen overflow-auto">
        <Box component="main" className="p-0">
          <Routes>
            <Route path="/" element={<AdminDashBoard />} />
            <Route path="/orders" element={<Orders />} />

            <Route path="/accessField" element={<AccessField />} />
            <Route path="/register-trainee" element={<RegisterTrainee />} />
            <Route path="/register-employee" element={<RegisterEmployee />} />
            <Route path="/sales-report" element={<SealsReports />} />
            <Route path="/meeting" element={<Meeting />} />
            <Route path="/payment-data" element={<PaymentDashboard />} />
            <Route path="/users/create-group" element={<CreateGroup />} />
            <Route path="/users/existing-group" element={<ExistingGroup />} />
          </Routes>
        </Box>
      </div>
    </div>
  );
};

export default Admin;
