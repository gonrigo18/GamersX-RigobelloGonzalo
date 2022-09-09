import React from 'react';
import { Card, CardBody, CardTitle, CardFooter, CardText } from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount'
import { useState } from "react"


const ItemDetail = ({ item }) => {

    let [cantidad, setCantidad] = useState(1)

    const handleOnAdd = () => {
        console.log({
            ...item,
            cantidad
        })
    }

    return (
        <>
            <Card>
                <center><img src={item.img} alt="" width="30%"  /></center>
                <CardBody>
                    <CardTitle tag="h6">
                        {item.name}
                    </CardTitle>
                    <CardText>
                        {item.desc}
                    </CardText>
                    <ItemCount stock={item.stock} count={cantidad} setCounter={setCantidad} handleOnAdd={handleOnAdd} />
                </CardBody>
                <CardFooter>
                    <p>Precio: {item.price}</p>
                    <small>Stock disponible: {item.stock}</small>
                </CardFooter>
            </Card>
        </>
    )
}

export default ItemDetail;