import React from "react"
import { useState } from "react"



function ItemCount ({stock, initial, onAdd})  {


    stock = 0

    let [counter, setCounter] = useState(0)

            const sumar = () => {
                if (initial < stock){
                    setCounter(counter + 1)
                    stock--
                    initial++
                    console.log(" stock " + stock + " initial " + initial)
                }else{
                    console.log("Stock insuficiente")
                }
            }
            const restar = () => {
                setCounter(counter -1)
            }

    return (

        <div className="container my-5">
                <button onClick={restar} className="btn btn-outline-primary">-</button>
                <span className="mx-2">{counter}</span>
                <button onClick={ sumar} className="btn btn-primary">+</button>

        </div>


    )

}

export default ItemCount