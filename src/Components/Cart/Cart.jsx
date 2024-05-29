import React, { useContext, useEffect } from 'react'
import CartItem from './CartItem'
import Navbar from '../Navbar'
import { Button } from '@mui/material'
import { CartContext } from "../../CartContext"
import { getCart } from '../../State/Cart/Action'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    const jwt = localStorage.getItem("jwt")
    const dispatch = useDispatch();
    const cart = useSelector(store => store)

    useEffect(() => {
        dispatch(getCart(jwt));
    }, [jwt]);

    return (
        <div>
            <Navbar />
            {cart.cartItems?.length > 0 && <div className='lg:grid grid-cols-3 lg:px-16 relative mt-4'>
                <div className='col-span-2'>
                    {cart.cartItems.map((item) => (
                        <CartItem item={item} />
                    ))}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>PRICE DETAILS</p>
                        <hr />
                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price({cart.cartItems.totalItem} item)</span>
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
            </div>}

        </div>
    )
}

export default Cart