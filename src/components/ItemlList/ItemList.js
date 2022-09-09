import React from "react"
import Item from '../Item/Item'
import "../ItemlList/ItemList.css"
import "bootstrap/dist/css/bootstrap.min.css";



const ItemList = ( { productos = [] }) => {

    return (
        <div className="my-5 ver">
            {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </div>
    )
}

export default ItemList