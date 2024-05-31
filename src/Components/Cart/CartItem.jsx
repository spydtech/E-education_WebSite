import React, { useContext } from 'react'
import { CartContext } from '../../CartContext'


const CartItem = ({ item, index }) => {
    const { removeFromCart } = useContext(CartContext);
    const { courseName, coursePrice, courseId } = item;
    // const generateCourseId = () => {
    //     const digits = '0123456789';
    //     let courseId = '';
    //     for (let i = 0; i < 6; i++) { // Generate a 6-digit courseId
    //         courseId += digits.charAt(Math.floor(Math.random() * digits.length));
    //     }
    //     return courseId;
    // };
    const handleRemove = () => {
        removeFromCart(index);
    };
    return (
        <>
            <div className='p-5 shadow-lg border rounded-md'>
                <div className='flex items-center'>
                    <div className='ml-5 space-y-1'>
                        {/* <p className='font-semibold'>Course ID: {generateCourseId()}</p> */}
                        <p className='font-semibold'>{courseId}</p>
                        <p className='font-semibold'>{courseName}</p>
                        <p className='opacity-70 mt-2'>Seller: SPY D TECH</p>
                        <div className="flex space-x-2 items-center pt-3">
                            <p className="font-semibold text-lg">₹{coursePrice}</p>
                        </div>
                        <button className="text-red-600 font-semibold" onClick={handleRemove}>Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem