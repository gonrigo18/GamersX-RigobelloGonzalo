import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, CardTitle, CardFooter} from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount.js';



const ItemCard = (props) => {
  const  {name, desc, img, price, stock} = props;
  return (
    <div>
      <Card className="my-2" style={{ width: '18rem' }}>
        <img src= {img}/>
        <CardBody>
          <CardTitle tag="h5">
            {name}
          </CardTitle>
          <CardText>
            {desc}
          </CardText>
          <ItemCount/>
        </CardBody>
        <CardFooter>
          $ {price} - Stock: {stock}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemCard;