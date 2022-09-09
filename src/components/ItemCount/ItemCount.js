import React from "react"
import { useState } from "react"


const ItemCount = ({ stock, count, setCounter, handleOnAdd }) => {



    if (stock === 0) {
        [count, setCounter] = useState(0)
    } else {
        [count, setCounter] = useState(1)
    }

    const handleAdd = () => {
        if (count < stock) {
            setCounter(count + 1)
        }
    }
    const handleRest = () => {
        if (count > 1) {
            setCounter(count - 1)
        }
    }


    return (

        <div className="container my-5">
            <button onClick={handleRest} className="btn btn-outline-primary">-</button>
            <span className="mx-3">{count}</span>
            <button onClick={handleAdd} className="btn btn-primary">+</button>
            <hr />
            <button className="add-cart btn btn-success my-2" disabled={stock <= 0} onClick={() => handleOnAdd(count)}>Añadir al carrito</button>

        </div>


    )

}

export default ItemCount