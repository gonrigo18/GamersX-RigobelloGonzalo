import React from 'react';
import { createContext } from "react";
import { useState } from "react"
import {  useContext } from "react"


export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartCounter = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = ()=>{
        return cart.reduce((acc,item) => acc + item.cantidad * item.price,0)
    }
    const emptyCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartCounter,
            cartTotal,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () =>{
    return useContext(CartContext)
}