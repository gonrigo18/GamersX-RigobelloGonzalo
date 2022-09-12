import React from 'react';
import { createContext } from "react";
import { useState } from "react"
import { useContext } from "react"
import Swal from 'sweetalert2'


export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        Swal.fire({
            position: 'center',
            background: "black",
            iconColor:"green",
            color:"white",
            icon: 'success',
            title: 'Se añadió al carrito',
            showConfirmButton: false,
            timer: 1500
        })
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartCounter = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0)
    }

    const removeItem = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart(cart.filter((item) => item.id !== id))
            }
        })
    }
    const emptyCart = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
        })
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartCounter,
            cartTotal,
            emptyCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}