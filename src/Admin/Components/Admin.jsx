import { Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { FaInbox, FaMailchimp } from 'react-icons/fa';
import AdminDashBoard from './AdminDashBoard'
import CreateCourseForm from './CreateCourseForm'
import CourseTable from './CourseTable'
import OrderTable from './OrderTable'
import CustomerTable from './CustomersTable'
import { AccountCircle, Dashboard } from '@mui/icons-material';

const menu = [
    { name: "Dashboard", path: "/admin", icon: <Dashboard /> },
    { name: "Courses", path: "/admin/courses", icon: <Dashboard /> },
    { name: "Customers", path: "/admin/customers", icon: <Dashboard /> },
    { name: "Orders", path: "/admin/orders", icon: <Dashboard /> },
    { name: "Total Earnings", path: "/admin", icon: <Dashboard /> },
    { name: "Weekly Overview", path: "/admin", icon: <Dashboard /> },
    { name: "Monthly Overview", path: "/admin", icon: <Dashboard /> },
    { name: "Add Product", path: "/admin/product/create", icon: <Dashboard /> },
];

const drawerWidth = 240;
const Admin = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}>
            {isLargeScreen && <Toolbar />}
            <List>
                {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>{item.name}</ListItemText>
                    </ListItemButton>
                </ListItem>)}
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>

    )
    const handleSideBarViewInMobile = () => {
        setSideBarVisible(true);
    };

    const handleCloseSideBar = () => {
        setSideBarVisible(false);
    };
    const drawerVariant = isLargeScreen ? "permanent" : "temporary";
    return (
        <div>
            <div className='flex h-[100vh]'>
                <CssBaseline />
                <Drawer
                    variant={drawerVariant}
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: drawerWidth,
                            boxSizing: "border-box",
                            ...(drawerVariant === "temporary" && {
                                top: 0,
                                [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                                {
                                    position: "fixed",
                                    left: 0,
                                    right: 0,
                                    height: "100%",
                                    zIndex: (theme) => theme.zIndex.drawer + 2,
                                },
                            }),
                        },
                    }}
                    open={isLargeScreen || sideBarVisible}
                    onClose={handleCloseSideBar}
                >
                    {drawer}
                </Drawer>

                <div className='w-[85%]'>
                    <Routes>
                        <Route path='/' element={<AdminDashBoard />}></Route>
                        <Route path='/course/create' element={<CreateCourseForm />}></Route>
                        <Route path='/courses' element={<CourseTable />}></Route>
                        <Route path='/orders' element={<OrderTable />}></Route>
                        <Route path='/customers' element={<CustomerTable />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Admin