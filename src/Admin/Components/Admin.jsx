import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Box, CssBaseline, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import AdminDashBoard from './AdminDashBoard';
import CreateCourseForm from './CreateCourseForm';
import CourseTable from './CourseTable';
import OrderTable from './OrderTable';
import CustomerTable from './CustomersTable';
import { AccountCircle, Dashboard, ShoppingCart, People, ListAlt, AddCircle } from '@mui/icons-material';

const menu = [
    { name: "Dashboard", path: "/admin", icon: <Dashboard /> },
    { name: "Courses", path: "/admin/courses", icon: <ListAlt /> },
    { name: "Customers", path: "/admin/customers", icon: <People /> },
    { name: "Orders", path: "/admin/orders", icon: <ShoppingCart /> },
    { name: "Add Product", path: "/admin/course/create", icon: <AddCircle /> },
];

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const handleCloseSideBar = () => {
        setSideBarVisible(false);
    };

    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100vh",
                width: "280px", // Increase the width of the sidebar
            }}
            className="bg-gray-800 text-white"
        >
            {isLargeScreen && <Toolbar />}
            <div className="flex-grow">
                <ul className="py-4">
                    {menu.map((item, index) => (
                        <li key={item.name}>
                            <button
                                onClick={() => navigate(item.path)}
                                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="font-semibold">{item.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 w-full"
                >
                    <AccountCircle />
                    <span className="font-semibold">Account</span>
                </button>
            </div>
        </Box>
    );

    const drawerVariant = isLargeScreen ? "permanent" : "temporary";

    return (
        <div className="flex h-screen">
            <CssBaseline />
            <div className={`bg-gray-900 text-white ${drawerVariant === 'temporary' && !sideBarVisible ? '-ml-64' : 'w-64'}`}>
                {drawer}
            </div>
            <div className="flex-grow h-screen overflow-auto">
                <Box component="main" className="p-4">
                    <Routes>
                        <Route path='/' element={<AdminDashBoard />} />
                        <Route path='/course/create' element={<CreateCourseForm />} />
                        <Route path='/courses' element={<CourseTable />} />
                        <Route path='/orders' element={<OrderTable />} />
                        <Route path='/customers' element={<CustomerTable />} />
                    </Routes>
                </Box>
            </div>
        </div>
    );
};

export default Admin;
