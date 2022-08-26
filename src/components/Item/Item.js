import React from "react"
import ItemCount from "../ItemCount/ItemCount"

const Item = ( {producto} ) => {

    return (
        <div>
            <img src={producto.img}/>
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.precio}</p>
            <small>Stock disponible: {producto.stock}</small>
            <p>{producto.desc}</p>
            <a href="#" className="btn btn-primary my-2">Ver más</a>
            <ItemCount stock= " " initial="1"/>
        </div>
    )
}

export default Item