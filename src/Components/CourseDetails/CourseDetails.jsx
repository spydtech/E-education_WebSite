

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

const product = {
    name: 'Full Stack Web Development',
    price: '₹192',
    href: '#',
    images: [
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP7WwqRZMt45muqpTdBtWssi3TJHjGG4UkwvxBaIBRAV5naPe4-XBwl6tatEPaZWkDDk&usqp=CAU',
            alt: 'Product Image',
        },
    ],
    highlights: [
        'HTML',
        'CSS',
        'JavaScript',
        'User Experience(UX)',
        'User Interface(UI)'
    ],
};


export default function CourseDetails() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();
    const handleAddToCart = () => {
        navigate('/cart')
    }

    return (
        <>
            <Navbar />
            <div className="bg-white lg:px-20 max-h-full">
                <div className="pt-6">
                    <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
                        {/* Image gallery */}
                        <div className="flex flex-col items-center ">
                            <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[40rem] mt-10">
                                <img
                                    src={product.images[0].src}
                                    alt={product.images[0].alt}
                                    className="h-full w-full object-cover object-center pt-10"
                                />
                            </div>
                        </div>

                        {/* Product info */}
                        <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6  lg:max-w-7xl  lg:px-8 lg:pb-24">
                            <div className="lg:col-span-2">
                                <h2 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">{product.name}</h2>
                            </div>
                            <div className='"mt-4 lg:row-span-3 lg:mt-0"'>
                                <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                                    <p className='font-semibold'>{product.price}</p>
                                    <p className='opacity-50 line-through'>$211</p>
                                    <p className='text-green-600 font-semibold'>5% Off</p>
                                </div>
                            </div>

                            {/* Add to cart button */}
                            <div className="flex items-center space-x-4 pt-5">
                                <button onClick={handleAddToCart}
                                    type="button"
                                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    id="wishlist"
                                    className="bg-transparent hover:bg-gray-400 text-gray-600 p-2 rounded-full focus:outline-none"
                                    onClick={() => setLiked(!liked)}
                                >
                                    {liked ? <FcLike className="w-6 h-6" /> : <FcLikePlaceholder className="w-6 h-6" />}
                                </button>
                            </div>

                            <div data-purpose="money-back-guarantee" className="dark-bg-text pt-5 money-back-guarantee--color-subdued---0rZH"><span class="money-back">30-Day Money-Back Guarantee</span></div>
                            <div class="generic-purchase-section--local-incentive--4i-xF"><div data-purpose="full-lifetime-access" class="ud-text-xs dark-bg-text full-lifetime-access--color-subdued--o52tD">Full Lifetime Access</div></div>


                            {/* Highlights */}
                            <div className='mt-10'>
                                <h2 className="text-xl font-semibold text-gray-900">Highlights</h2>
                                <div className='mt-4'>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {product.highlights.map((highlight, index) => (
                                            <li key={index}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </>

    );
}


