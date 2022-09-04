import React from "react"
import { useState } from "react"




const ItemCount = ({ stock, initial, onAdd }) => {

    
    let [count, setCounter] = useState(0)

    const handleAdd = () => {
        if (count < stock) {
            setCounter(count + 1)
        }
    }
    const handleRest = () => {
        if (count > 0 ) {
            setCounter(count - 1)
        }
    }


    return (

        <div className="container my-5">
            <button onClick={handleRest} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{count}</span>
            <button onClick={handleAdd} className="btn btn-primary">+</button>
            <button className="add-cart btn btn-secondary" disabled={stock<=0} onClick={()=> onAdd(count)}>Añadir al carrito</button>

        </div>


    )

}

export default ItemCount