import React, { useContext, useEffect, useState } from 'react';
import CartItem from './CartItem';
import Navbar from '../Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { CartContext } from '../../CartContext';
import axios from 'axios'; // Import Axios for API calls
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterPart from '../Home/footer/Footer';

const Cart = ({ history }) => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const jwt = localStorage.getItem('jwt');
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state)

    // Calculate total price and discount price
    const totalPrice = cartItems.reduce((total, item) => total + item.coursePrice, 0);

    const discountPrice = cartItems.length > 0 ? 30 : 0;

    // Calculate total amount after discount
    const totalAmount = totalPrice - discountPrice;

    // Initialize Razorpay
    const initializeRazorpay = async (orderId) => {
        const rzp = new window.Razorpay({
            key: 'rzp_test_pGk4bGkuLgOxKA', // Replace with your actual API key
            order_id: orderId,
            currency: 'INR',
            name: 'Your Company Name',
            description: 'Payment for Courses',
            handler: async function (response) {
                toast("Payment Successfully done")
                // Handle successful payment
                console.log(response);
                // You can redirect to a success page or perform further actions here
                setCartItems([]);


                // Store payment response in the backend
                try {
                    const paymentResponse = {
                        userId: auth.user.id, // Implement a function to extract user ID from JWT
                        courses: cartItems.map(item => ({
                            courseId: item.courseId,
                            courseName: item.courseName,
                            coursePrice: item.coursePrice,
                        })),
                        totalAmount: totalAmount,
                        // orderId: response.razorpay_payment_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        paymentStatus: 'success',
                    };
                    const paymentStoreResponse = await axios.post(
                        'http://localhost:8081/api/payment/store-payment', // Backend API endpoint for storing payment
                        paymentResponse,
                        {
                            headers: {
                                Authorization: `Bearer ${jwt}`, // Send JWT token to authenticate the request
                            },
                        }
                    );
                    console.log('Payment stored successfully:', paymentStoreResponse.data);
                } catch (error) {
                    console.error('Error storing payment:', error);
                    alert('Error storing payment. Please contact support.'); // Handle payment storage error
                }
            },
        });
        rzp.open(); // Open Razorpay payment popup
    };

    // Handle checkout button click
    const handleCheckout = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8081/create-order', // Backend API endpoint for creating Razorpay order
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

            initializeRazorpay(orderId); // Initialize and open Razorpay payment popup

        } catch (error) {
            console.error('Error initiating payment:', error);
            alert('Error initiating payment. Please try again.'); // Handle payment error
        }
    };

    return (
        <>
            <Navbar />
            <div>
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
                                onClick={handleCheckout}
                            >
                                Check Out
                            </Button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
            <FooterPart />
        </>


    );
};

export default Cart;
