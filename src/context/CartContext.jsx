import react, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [registeredCourses, setRegisteredCourses] = useState([]);
    const addItemsToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, ...item]);
    }

    const removeItemFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }

    const clearCart = () => {
        setCartItems([]);
    };
    const cartSize = cartItems.length;
    const totalAmount = cartItems.reduce((total, item) => total + item.price * 1, 0);


    const [paymentStatus, setPaymentStatus] = useState([]);

    useEffect(() => {
        setRegisteredCourses(cartItems);
    }, [paymentStatus]);
    return (
        <CartContext.Provider
            value={{
                cartSize,
                cartItems,
                addItemsToCart,
                removeItemFromCart,
                clearCart,
                totalAmount,
                paymentStatus,
                setPaymentStatus,
                registeredCourses
            }}
        >
            {children}
        </CartContext.Provider>
    );
}