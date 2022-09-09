import React from "react"
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardFooter } from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount'
import "bootstrap/dist/css/bootstrap.min.css";


const Item = ({ producto }) => {

    const  {name, price, stock} = producto;
    const onAdd = (count) =>{
        console.log("Se agregó al carrito", count, name,price)
    }
    return (
        <>
            <Card style={{ width: '15rem' }}>
                <img src={producto.img} alt="" />
                <CardBody>
                    <CardTitle tag="h6">
                        {producto.name}
                    </CardTitle>
                    <ItemCount stock={stock} onAdd={onAdd} />
                </CardBody>
                <CardFooter>
                    <p>Precio: {producto.price}</p>
                    <small>Stock disponible: {producto.stock}</small>
                </CardFooter>
                <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver más</Link>
            </Card>
        </>
    )
}


export default Item