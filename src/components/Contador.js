import React from "react"
import { useState } from "react"



const Contador = () => {

    //let counter = 1


    let [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }
    const restar = () => {
        setCounter(counter -1)
    }
    return (

        <div className="container my-5">
                <h2>Contador</h2>
                <hr/>
                <button onClick={restar} className="btn btn-outline-primary">-</button>
                <span className="mx-2">{counter}</span>
                <button onClick={sumar} className="btn btn-primary">+</button>
        </div>


    )

}

export default Contador