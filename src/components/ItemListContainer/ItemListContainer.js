import { useEffect, useState } from "react"
import React from 'react';
import {Spinner} from "reactstrap"
import ItemList from "../ItemlList/ItemList"
import { useParams } from 'react-router-dom'
import {requestData} from "../RequestData/RequestData"
import "bootstrap/dist/css/bootstrap.min.css";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        requestData()

            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((prod) => prod.category === categoryId))
                }
            })
            .catch(error =>
                console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId]);

    return (
        <div>
            {
                loading 
                ? (<Spinner color="primary" style={{ height: '2rem', width: '2rem' }} />) 
                : <ItemList productos={productos}/>      
            }
        </div>
    )
}

export default ItemListContainer

/*{
    products.map(product => (
        <div className="col-4" key={product.id}>
            <ItemList name={product.name} price={product.price} img={product.img} stock={product.stock} />
        </div>
    ))
}*/