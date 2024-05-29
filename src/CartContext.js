import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
