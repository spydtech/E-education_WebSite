import React from 'react'


const CartItem = () => {
    return (
        <>
            <div className='p-5 shadow-lg border rounded-md'>
                <div className='flex items-center'>
                    <div className='w-[20rem] h-[10rem]'>
                        <img className='h-full w-full object-cover object-center' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP7WwqRZMt45muqpTdBtWssi3TJHjGG4UkwvxBaIBRAV5naPe4-XBwl6tatEPaZWkDDk&usqp=CAU" alt='' />
                    </div>
                    <div className='ml-5 space-y-1'>
                        <p className='font-semibold'>Full Stack Web Developement</p>
                        <p className='opacity-70 mt-2'>Seller: SPY D TECH</p>
                        <div className="flex space-x-2 items-center pt-3">
                            <p className="font-semibold text-lg">₹199</p>
                            <p className=" opacity-50 line-through">
                                ₹212
                            </p>
                            <p className="text-green-600 font-semibold">
                                5% off
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CartItem