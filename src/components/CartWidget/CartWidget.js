import React from 'react';
import {BsFillCartCheckFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {

    const {cartCounter} = useContext(CartContext)

    return (
        <Link to="/cart">
            <BsFillCartCheckFill/>
            <span>{cartCounter()}</span>
        </Link>
    );
};

export default CartWidget;