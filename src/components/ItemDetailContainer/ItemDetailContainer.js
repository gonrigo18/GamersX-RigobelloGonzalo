import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { requestData } from "../RequestData/RequestData"
import ItemDetail from "../ItemDetail/ItemDetail"
import {Spinner} from "reactstrap"
import "../ItemDetailContainer/ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        requestData()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="prod-card">{loading ? (<center><Spinner color="primary" style={{ height: '2rem', width: '2rem' }} /></center>) : <ItemDetail item={item} />}</div>
    )
}

export default ItemDetailContainer;