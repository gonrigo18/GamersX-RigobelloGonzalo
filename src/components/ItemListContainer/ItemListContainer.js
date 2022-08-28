import React from "react"
import "../ItemListContainer/ItemList.css"
import ItemCard from "./ItemCard.js"



const ItemListContainer = () => {

    const products = [
        {
            id: 1,
            name: 'Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black',
            price: 15950,
            img: './img/Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_646b61f7-grn.jpg',
            stock: 3,
            desc: 'Capacidad 16 gb, Velocidad 3000 mhz, Tipo DDR4, Cantidad De Memorias 1, Latencia 16 cl, Voltaje 1.35 v'

        },
        {
            id: 2,
            name: 'Memoria GeiL DDR4 16GB 3000MHz Orion RGB Black',
            price: 13350,
            img: './img/Memoria_GeiL_DDR4_16GB_3000MHz_Orion_RGB_Black_aa7bb4c0-grn.jpg',
            stock: 12,
            desc: 'Capacidad 16 gb, Velocidad 3000 mhz, Tipo DDR4, Cantidad De Memorias 1, Latencia 16 cl, Voltaje 1.35 v'
        },
        {
            id: 3,
            name: 'Producto 3',
            price: 3000,
            img: './img/Auriculares_HyperX_Cloud_Flight_Black_Wireless_ee2bc8f7-grn.jpg',
            stock: 50,
            desc: 'Un gran producto'
        },
        {
            id: 4,
            name: 'Producto 4',
            price: 4000,
            img: 'https://via.placeholder.com/250',
            stock: 50,
            desc: 'Un gran producto'
        },
        {
            id: 5,
            nanme: 'Producto 5',
            price: 5000,
            img: 'https://via.placeholder.com/250',
            stock: 50,
            desc: 'Un gran producto'
        },
        {
            id: 6,
            name: 'Producto 6',
            price: 6000,
            img: 'https://via.placeholder.com/250',
            stock: 50,
            desc: 'Un gran producto'
        },
    ]
    
    return (
        <div className="row">
            {
                products.map(product => (
                    <div className="col-4">
                        <ItemCard key= {product.id} name= {product.name} price={product.price} img={product.img} desc={product.desc} stock={product.stock} />
                    </div>
                ))
            }
        </div>
    )
}

export default ItemListContainer