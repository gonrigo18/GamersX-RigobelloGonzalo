import React from "react"
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardFooter } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const Item = ({ producto }) => {


    return (
        <div className="my-3 ver">
            <Card style={{ width: '15rem' }}>
                <img src={producto.img} alt="" />
                <CardBody>
                    <CardTitle tag="h6">
                        {producto.name}
                    </CardTitle>
                </CardBody>
                <CardFooter>
                    <p>Precio: ${producto.price}</p>
                    <small>Stock disponible: {producto.stock}</small>
                </CardFooter>
                <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver más</Link>
            </Card>
        </div>
    )
}


export default Item