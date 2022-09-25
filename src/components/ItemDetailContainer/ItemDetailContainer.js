import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Spinner } from "reactstrap"
import { Navigate } from "react-router-dom";
import { db } from '../../firebase/config'
import { doc, getDoc } from 'firebase/firestore'
import "../ItemDetailContainer/ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem({ id: doc.id, ...doc.data() })
            })
            .catch ((err) =>{
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            {
                item === undefined ?
                    <Navigate to="/" replace={true} />
                    :
                    <div className="prod-card">{loading ? (<center><Spinner color="primary" style={{ height: '2rem', width: '2rem' }} /></center>) : <ItemDetail item={item} />}</div>
            }
        </>
    )
}

export default ItemDetailContainer;
