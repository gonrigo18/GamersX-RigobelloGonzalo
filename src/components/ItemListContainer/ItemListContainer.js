import { useEffect, useState } from "react"
import React from 'react';
import { Spinner } from "reactstrap"
import ItemList from "../ItemlList/ItemList"
import { useParams } from 'react-router-dom'
import { requestData } from "../RequestData/RequestData"
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ItemListContainer/ItemListContainer.css"



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

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
        <>
            {
                loading ?
                    <center><Spinner color="primary" style={{ height: '3rem', width: '3rem' }} /></center>
                    :
                    <>
                        {
                            productos.length ?
                                <ItemList productos={productos} />
                                :
                                <Navigate to="/error" replace={true} />
                        }
                    </>
            }
        </>
    )
}

export default ItemListContainer
