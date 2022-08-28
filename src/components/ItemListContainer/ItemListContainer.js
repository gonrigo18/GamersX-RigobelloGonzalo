import React from "react"
import "../ItemListContainer/ItemList.css"
import ItemCard from "./ItemCard.js"
import { useEffect, useState } from "react"
import { Spinner } from 'reactstrap';



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
            name: 'Auriculares HyperX Cloud Flight Black Wireless',
            price: 22000,
            img: './img/Auriculares_HyperX_Cloud_Flight_Black_Wireless_ee2bc8f7-grn.jpg',
            stock: 12,
            desc: 'Audio 2.0 Colores Negro Conexión Inalámbrico Con Micrófono Si'
        },
        {
            id: 4,
            name: 'Notebook Gamer AORUS KD 15.6" Core I7 11800H 16GB (2x8GB) 512GB SSD NVMe RTX 3060 240Hz W11',
            price: 441000,
            img: './img/Notebook_Gamer_AORUS_KD_15.6__Core_I7_11800H_16GB__2x8GB__512GB_SSD_NVMe_RTX_3060_240Hz_W11_d6ed3ff1-grn.jpg',
            stock: 5,
            desc: 'Color Gris Oscuro Sistema Operativo Windows 11 Home Tipo De Cpu Intel Tipo De Gpu Nvidia GeForce Batería Extraible No Modelo Gpu RTX 3060 Modelo Cpu Core i7 11800H Tipo Notebook Memoria Gpu 6 gb Lector De Huellas No Familia Del Procesador Intel Core i7'
        },
        {
            id: 5,
            name: 'Silla Gamer Cooler Master Caliber R2C Grey',
            price: 107400,
            img: './img/Silla_Gamer_Cooler_Master_Caliber_R2C_Grey_21bb1177-grn.jpg',
            stock: 8,
            desc: 'Sin descripción'
        },
        {
            id: 6,
            name: 'Procesador AMD Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler',
            price: 36000,
            img: './img/Procesador_AMD_Ryzen_5_1600_AF_Zen__12nm_AM4_Wraith_Stealth_Cooler_187bb9ab-grn.jpg',
            stock: 15,
            desc: 'Modelo Ryzen 5 1600 AF Socket AM4 Ryzen 2th Gen Núcleos 6 Frecuencia 3200.00 mhz Proceso De Fabricación 12 nm Chipset Gpu NO Posee Gráficos Integrados Hilos 12 Frecuencia Turbo 3600 mhz Familia AMD RYZEN 5'
        },
    ]

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = () => {
        const error = false
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!error) {
                    resolve(products)
                } else {
                    reject("Error")
                }
            }, 5000)
        })
    }

    useEffect(() => {
        getData()
            .then(res => {
                setData(res);
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            {
                loading ? (<Spinner color="primary" style={{  height: '2rem', width: '2rem'
                }} />) : <div className="row">
                    {
                        data.map(product => (
                            <div className="col-4">
                                <ItemCard key={product.id} name={product.name} price={product.price} img={product.img} desc={product.desc} stock={product.stock} />
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default ItemListContainer