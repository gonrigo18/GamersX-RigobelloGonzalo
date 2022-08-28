import React from "react"
import { useState } from "react"




const ItemCount = ({ stock, initial, onAdd }) => {

    let [count, setCounter] = useState(0)

    const add = () => {
        if (count < stock) {
            setCounter(count + 1)
        }
    }
    const rest = () => {
        if (count > 0) {
            setCounter(count - 1)
        }
    }

    return (

        <div className="container my-5">
            <button onClick={rest} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{count}</span>
            <button onClick={add} className="btn btn-primary">+</button>
            <button style ={{width:"100%", marginTop: "1rem" }}disabled={stock<=0} onClick={()=> onAdd(count)}>Añadir al carrito</button>

        </div>


    )

}

export default ItemCount