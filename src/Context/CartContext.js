// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Initial state for the cart
const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
};

// Create the Cart Context
const CartContext = createContext();

// Cart reducer function to update cart state
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            const existingItem = state.items[existingItemIndex];
            let updatedItems;

            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1
                };
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat({ ...action.payload, quantity: 1 });
            }

            const updatedTotalQuantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
            const updatedTotalAmount = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

            return {
                items: updatedItems,
                totalQuantity: updatedTotalQuantity,
                totalAmount: updatedTotalAmount.toFixed(2)
            };

        case 'REMOVE_FROM_CART':
            const filteredItems = state.items.filter(item => item.id !== action.payload);
            const newTotalQuantity = filteredItems.reduce((acc, item) => acc + item.quantity, 0);
            const newTotalAmount = filteredItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

            return {
                items: filteredItems,
                totalQuantity: newTotalQuantity,
                totalAmount: newTotalAmount.toFixed(2)
            };

        case 'ADJUST_QUANTITY':
            const itemToAdjust = state.items.find(item => item.id === action.payload.id);
            if (!itemToAdjust) return state;

            const newQuantity = itemToAdjust.quantity + action.payload.amount;

            if (newQuantity < 1) return state; // Prevent quantity from going below 1

            const updatedCartItems = state.items.map(item =>
                item.id === itemToAdjust.id ? { ...itemToAdjust, quantity: newQuantity } : item
            );

            return {
                ...state,
                items: updatedCartItems,
                totalAmount: updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
            };

        default:
            return state;
    }
};

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const adjustQuantity = (id, amount) => {
        dispatch({ type: 'ADJUST_QUANTITY', payload: { id, amount } });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, adjustQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook for using the cart context
export const useCart = () => {
    return useContext(CartContext);
};
