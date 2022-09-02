import React from "react"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'reactstrap';
import ItemCard from "../ItemListContainer/ItemCard";




const ItemList = ({ products = [] }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = () => {
        const error = false
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!error) {
                    resolve(products)
                } else {
                    reject("Error")
                }
            }, 2000)
        })
    }

    useEffect(() => {
        getData()
            .then(res => {
                setData(res);
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, []);


    return (
        <div>
            {
                loading ? (<Spinner color="primary" style={{
                    height: '2rem', width: '2rem'
                }} />) : <div className="row">
                    {
                        data.map(product => (
                            <div className="col-4" key={product.id}>
                                <ItemCard  name={product.name} price={product.price} img={product.img} desc={product.desc} stock={product.stock} />
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )



}

export default ItemList