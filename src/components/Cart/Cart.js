import "../Cart/Cart.css"
import React from 'react';
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react"



const Cart = () => {

  const { cart, cartTotal, emptyCart } = useContext(CartContext)

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
            <hr />
          </div>
        ))}

        <h4>Total: ${cartTotal()}</h4>
        <button onClick={emptyCart}className="btn btn-danger">Vaciar carrito</button>
    </div>
  )
}

export default Cart