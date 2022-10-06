import { useEffect, useState } from "react"
import React from 'react';
import { Spinner } from "reactstrap"
import ItemList from "../ItemlList/ItemList"
import { useParams } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import { db } from '../../firebase/config'
import "bootstrap/dist/css/bootstrap.min.css";
import "../ItemListContainer/ItemListContainer.css"
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'productos')
        const catId = categoryId
            ? query(productosRef, where('category', '==', categoryId))
            : productosRef
        getDocs(catId)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProductos(productosDB)
            })
            .catch((err) => {
            })
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
