import React from "react"
import { useState } from "react"

const ItemCount = ({ stock, handleOnAdd }) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAdd = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }
    const handleRest = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }


    return (

        <div className="container my-5">
            <button onClick={handleRest} className="btn btn-outline-primary">-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleAdd} className="btn btn-primary">+</button>
            <hr />
            <button onClick={() => handleOnAdd(cantidad)} className="add-cart btn btn-success my-2" disabled={stock <= 0} >Añadir al carrito</button>
        </div>


    )

}

export default ItemCount