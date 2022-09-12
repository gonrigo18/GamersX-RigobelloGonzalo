import "../Cart/Cart.css"
import React from 'react';
import { useCartContext } from "../../Context/CartContext";
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom";



const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

  return (
    <div className="container my-5">
      <h1>Carrito</h1>
      <hr />
      {
        cart.map((item) => (
          <div key={item.id}>
            <h3>Producto: {item.name}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.cantidad}</p>
            <button onClick={()=>removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
            <br />
            <Link to="/" className='btn btn-warning my-2'>Seguir comprando</Link>
            <hr />
          </div>
        ))}

        <h4>Total: ${cartTotal()}</h4>
        <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
    </div>
  )
}

export default Cart