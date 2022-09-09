import React from "react"


const ItemCount = ({ stock, count, setCounter, handleOnAdd }) => {


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
            <button onClick={handleOnAdd} className="add-cart btn btn-success my-2" disabled={stock <= 0} >Añadir al carrito</button>
        </div>


    )

}

export default ItemCount