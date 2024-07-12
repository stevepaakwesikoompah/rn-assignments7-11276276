import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const loadCart = async () => {
            try {
                const cart = await AsyncStorage.getItem('cart');
                setCartItems(cart ? JSON.parse(cart) : []);
            } catch (error) {
                console.error("Error loading cart", error);
            }
        };

        loadCart();
    }, []);

    const addToCart = async (item) => {
        try {
            const updatedCartItems = [...cartItems, item];
            setCartItems(updatedCartItems);
            await AsyncStorage.setItem('cart', JSON.stringify(updatedCartItems));
        } catch (error) {
            console.error("Error adding to cart", error);
        }
    };

    const removeFromCart = async (id) => {
        try {
            const updatedCartItems = cartItems.filter(item => item.id !== id);
            setCartItems(updatedCartItems);
            await AsyncStorage.setItem('cart', JSON.stringify(updatedCartItems));
        } catch (error) {
            console.error("Error removing from cart", error);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);