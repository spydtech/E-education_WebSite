import React, { useContext, useEffect, useState } from 'react';
import CartItem from './CartItem';
import Navbar from '../Navbar';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { CartContext } from '../../CartContext';
import { getCart } from '../../State/Cart/Action';
import { getUser } from '../../State/Auth/Action';

const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const jwt = localStorage.getItem('jwt');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(jwt));
    }, [jwt, dispatch]);

    // Calculate total price and discount price
    const totalPrice = cartItems.reduce((total, item) => total + item.coursePrice, 0);

    const discountPrice = 30; // Assuming a static discount for demonstration

    // Calculate total amount after discount
    const totalAmount = totalPrice - discountPrice;

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
                                <span>${totalPrice}</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Discount Price</span>
                                <span className='text-green-600'>${discountPrice}</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>${totalAmount}</span>
                            </div>
                        </div>
                        <Button
                            variant='contained'
                            type='submit'
                            sx={{ padding: '.8rem 2rem', marginTop: '2rem', width: '100%' }}
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
