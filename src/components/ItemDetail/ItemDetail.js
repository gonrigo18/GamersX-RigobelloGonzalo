import React from 'react';
import { Card, CardBody, CardTitle, CardFooter, CardText } from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {

    const { name, price, stock } = item;
    const onAdd = (count) => {
        console.log("Se agregó al carrito", count, name, price)
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
                    <ItemCount stock={stock} onAdd={onAdd} />
                </CardBody>
                <CardFooter>
                    <p>Precio: {item.price}</p>
                    <small>Stock disponible: {item.stock}</small>
                    <Link to={`/item/${item.id}`} className="btn btn-primary my-2">Ver más</Link>
                </CardFooter>
            </Card>
        </>
    )
}

export default ItemDetail;