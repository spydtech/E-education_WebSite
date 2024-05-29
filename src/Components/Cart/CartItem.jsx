import React from 'react'



const CartItem = ({ item }) => {
    return (
        <>
            <div className="p-5 shadow-lg border rounded-md">
                <div className="flex items-center">
                    <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
                        <img
                            className="w-full h-full object-cover object-top"
                            src={item.image}
                            alt=""
                        />
                    </div>
                    <div className="ml-5 space-y-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className='opacity-70 mt-2'>Seller: {item.seller}</p>
                        <div className='flex space-x-2 items-center pt-3'>
                            <p className='font-semibold text-lg'>₹{item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CartItem