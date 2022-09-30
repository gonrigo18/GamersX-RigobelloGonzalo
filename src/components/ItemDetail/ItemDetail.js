import React from 'react';
import { Card, CardBody, CardTitle, CardFooter, CardText } from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import ContinueShoping from '../ContinueShopping/ContinueShoping';



const ItemDetail = ({ item }) => {


    const { addToCart, isInCart } = useContext(CartContext)


    const handleOnAdd = (cantidad) => {
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
                    {
                        isInCart(item.id)
                            ? <ContinueShoping/>
                            : <ItemCount
                                stock={item.stock}
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