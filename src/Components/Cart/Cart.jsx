import React from 'react'
import CartItem from './CartItem'
import Navbar from '../Navbar'
import { Button } from '@mui/material'

const Cart = () => {
    return (
        <div>
            <Navbar />
            <div className='lg:grid grid-cols-3 lg:px-16 relative mt-4'>
                <div className='col-span-2'>
                    {[1, 1, 1, 1].map((item) => <CartItem />)}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>PRICE DETAILS</p>
                        <hr />
                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>4244</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Discount Price</span>
                                <span className='text-green-600'>3000</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>1244</span>
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
                        >
                            Check Out
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart