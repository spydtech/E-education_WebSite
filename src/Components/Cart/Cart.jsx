import React, { useContext, useEffect, useState } from 'react';
import CartItem from './CartItem';
import Navbar from '../Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { CartContext } from '../../CartContext';
import { getCart } from '../../State/Cart/Action';
import { getUser } from '../../State/Auth/Action';
import axios from 'axios'; // Import Axios for API calls

const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const jwt = localStorage.getItem('jwt');
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state)

    // Calculate total price and discount price
    const totalPrice = cartItems.reduce((total, item) => total + item.coursePrice, 0);

    const discountPrice = 30; // Assuming a static discount for demonstration

    // Calculate total amount after discount
    const totalAmount = totalPrice - discountPrice;

    // Handle checkout button click
    const handleCheckout = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8082/create-order', // Backend API endpoint for creating Razorpay order
                {
                    amount: totalAmount * 100, // Amount in paisa
                    currency: 'INR',
                    receipt: 'receipt_order_12345', // Replace with your logic for receipt ID
                },
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`, // Send JWT token to authenticate the request
                    },
                }
            );
            const { orderId } = response.data; // Assuming your backend returns the orderId

            // Initialize Razorpay with orderId
            const rzp = new window.Razorpay({
                key: 'rzp_test_pGk4bGkuLgOxKA', // Replace with your actual API key
                order_id: orderId,
                currency: 'INR',
                name: 'Your Company Name',
                description: 'Payment for Courses',
                handler: function (response) {
                    alert('Payment Successful!'); // Handle successful payment
                    console.log(response);
                    // You can redirect to a success page or perform further actions here
                },
            });
            rzp.open(); // Open Razorpay payment popup


        } catch (error) {
            console.error('Error initiating payment:', error);
            alert('Error initiating payment. Please try again.'); // Handle payment error
        }
    };

    return (
        <div>
            <Navbar />
            <div className='lg:grid grid-cols-3 lg:px-16 relative mt-4'>
                <div className='col-span-2'>
                    {cartItems.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>PRICE DETAILS</p>
                        <hr />
                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>₹{totalPrice}</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Discount Price</span>
                                <span className='text-green-600'>₹{discountPrice}</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>₹{totalAmount}</span>
                            </div>
                        </div>
                        <Button
                            variant='contained'
                            type='submit'
                            sx={{ padding: '.8rem 2rem', marginTop: '2rem', width: '100%' }}
                            onClick={handleCheckout} // Handle checkout button click
                        >
                            Check Out
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
