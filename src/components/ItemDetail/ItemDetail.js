import React from 'react';


const ItemDetail = ({item}) => {
    return (
        <div className='my-5'>
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <h3>$ {item.price}</h3>
        <img src={item.img} alt=""/>
        
            
        </div>
    )
}

export default ItemDetail;