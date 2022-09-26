import React from 'react';
import {BsFillCartCheckFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext';
import "../CartWidget/CartWidget.css"


const CartWidget = () => {

    const {cartCounter, cart} = useContext(CartContext)

    return (
        <Link to="/cart" className={`widget ${cart.length > 0 ? 'widget-visible' :''}`}>
            <BsFillCartCheckFill/>
            <span>{cartCounter()}</span>
        </Link>
    );
};

export default CartWidget;