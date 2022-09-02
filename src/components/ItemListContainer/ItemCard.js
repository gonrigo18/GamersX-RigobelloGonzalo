import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, CardTitle, CardFooter} from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount.js';



const ItemCard = (props) => {
  const  {name, desc, img, price, stock} = props;
  const onAdd= (count) =>{
    console.log("Se agregó al carrito", count, name,price)
  }
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <img src= {img} alt=""/>
        <CardBody>
          <CardTitle tag="h5">
            {name}
          </CardTitle>
          <CardText>
            {desc}
          </CardText>
          <ItemCount stock= {stock} onAdd={onAdd}/>
        </CardBody>
        <CardFooter>
          $ {price} - Stock: {stock}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemCard;