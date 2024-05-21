import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getOrders } from '../../State/Admin/Order/Action'
import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const OrderTableView = () => {
    const dispatch = useDispatch();

    const { adminOrder } = useSelector(store => store)

    useEffect(() => {
        dispatch(getOrders())
    }, [adminOrder.confirmed, adminOrder.devlivered])
    console.log("admin Orders", adminOrder)
    return (
        <div>
            <Card className='mt-2'>
                <CardHeader title="All Orders" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Id</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* <TableRow
                            hover
                            key={item.name}
                            sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                        ></TableRow> */}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}

export default OrderTableView