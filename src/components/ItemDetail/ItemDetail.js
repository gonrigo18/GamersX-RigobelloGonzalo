import React from 'react';
import { Card, CardBody, CardTitle, CardFooter, CardText } from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from 'react-router-dom'


const ItemDetail = ({ item }) => {


    const { cart, addToCart, isInCart } = useContext(CartContext)
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)

    const handleOnAdd = () => {
        const itemToCart = {
            id: item.id,
            name: item.name,
            price: item.price,
            cantidad
        }
        addToCart(itemToCart)
    }

    return (
        <>
            <Card>
                <center><img src={item.img} alt="" width="30%" /></center>
                <CardBody>
                    <CardTitle tag="h6">
                        {item.name}
                    </CardTitle>
                    <CardText>
                        {item.desc}
                    </CardText>
                    {isInCart(item.id) && <p>El item ya esta agregado</p>}
                    {
                        isInCart(item.id)
                            ? <Link to="/cart" className="btn btn-danger my-2">Terminar compra</Link>
                            : <ItemCount
                                stock={item.stock}
                                count={cantidad}
                                setCounter={setCantidad}
                                handleOnAdd={handleOnAdd}
                            />
                    }
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