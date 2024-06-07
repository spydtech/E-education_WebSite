// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';

// const Users = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/admin/users');
//             console.log('Fetched users:', response.data); // Log fetched data
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     const handleDeleteUser = async (userId) => {
//         try {
//             await axios.delete(`http://localhost:8080/api/admin/${userId}`);
//             fetchUsers();
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     console.log('Users:', users); // Log users state

//     return (
//         <div className="container mx-auto mt-10">
//             <Typography variant="h4" gutterBottom>
//                 Users List
//             </Typography>
//             <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Name</TableCell>
//                             <TableCell>Email</TableCell>
//                             <TableCell>Action</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {Array.isArray(users) && users.length > 0 ? (
//                             users.map((user) => (
//                                 <TableRow key={user.id}>
//                                     <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
//                                     <TableCell>{user.email}</TableCell>
//                                     <TableCell>
//                                         <Button variant="outlined" color="primary" onClick={() => handleDeleteUser(user.id)}>
//                                             Delete
//                                         </Button>
//                                     </TableCell>
//                                 </TableRow>
//                             ))
//                         ) : (
//                             <TableRow>
//                                 <TableCell colSpan={3}>No users available.</TableCell>
//                             </TableRow>
//                         )}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// };

// export default Users;


// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { Avatar, CardHeader } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { getAllCustomers } from '../../State/Auth/Action'



const Users = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { auth } = useSelector(store => store)

    useEffect(() => {
        console.log("customer table use effect")
        dispatch(getAllCustomers(localStorage.getItem("jwt")))
    }, [])
    console.log("customer table ")
    return (
        <Card>
            <CardHeader
                title='Users'
                sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
                action={<Typography onClick={() => navigate("/admin/users")} variant='caption' sx={{ color: "blue", cursor: "pointer", paddingRight: ".8rem" }}>View All</Typography>}
                titleTypographyProps={{
                    variant: 'h5',
                    sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
                }}
            />
            <TableContainer>
                <Table sx={{ minWidth: 390 }} aria-label='table in dashboard'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {auth.customers.map(item => (
                            <TableRow hover key={item.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                                <TableCell> <Avatar alt={item.name} src={item.image} /> </TableCell>
                                <TableCell>{item.firstName} {item.lastName}</TableCell>
                                <TableCell>{item.email}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default Users
