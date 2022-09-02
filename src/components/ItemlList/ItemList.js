import React from "react"
import Item from '../Item/Item'
import "../ItemlList/ItemList.css"
import "bootstrap/dist/css/bootstrap.min.css";



const ItemList = ( { productos = [] }) => {

    /*const getData = () => {
        const error = false
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!error) {
                    resolve(products)
                } else {
                    reject("Error")
                }
            }, 1000)
        })
    }*/
    return (
        <div className="row">
            {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </div>
    )
}

export default ItemList