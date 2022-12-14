import React from 'react';
import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../firebase/config"
import { useForm } from "../../hooks/useForm"
import { Spinner } from "reactstrap"
import { Link } from "react-router-dom";




const Checkout = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()
    const [loading, setLoading] = useState(false)

    const [orderId, setOrderId] = useState(null)

    const { values, handleInputChange } = useForm({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }

        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) {  
            alert("Email incorrecto")
            return
        }
        setLoading(true)

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')

        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            setLoading(true)
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            setLoading(false)
                            setOrderId(doc.id)
                            terminarCompra()
                        })
                })
        } else {
            alert("Hay productos sin stock")
        }

    }
    return (
        <>
            {
                loading ?
                    <center><Spinner color="primary" style={{ height: '3rem', width: '3rem' }} /></center>
                    :
                    <>
                        {
                            orderId ?
                                <div className="container my-5">
                                    <h2>Compra exitosa!</h2>
                                    <hr />
                                    <p>Tu n??mero de orden es: <strong>{orderId}</strong></p>
                                </div>
                                :
                                cart.length === 0 ?
                                    <div className="container my-5">
                                        <h2>Tu carrito est?? vac??o</h2>
                                        <hr />
                                        <Link to="/" className="btn btn-primary">Ir a comprar</Link>
                                    </div>
                                    :
                                    <div className="container my-5">
                                        <h2>Checkout</h2>
                                        <hr />
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                name="nombre"
                                                onChange={handleInputChange}
                                                value={values.nombre}
                                                type={'text'}
                                                className="my-3 form-control"
                                                placeholder="Tu nombre" />
                                            <input
                                                name="email"
                                                onChange={handleInputChange}
                                                value={values.email}
                                                type={'email'}
                                                className="my-3 form-control"
                                                placeholder="Email" />
                                            <input
                                                name="direccion"
                                                onChange={handleInputChange}
                                                value={values.direccion}
                                                type={'text'}
                                                className="my-3 form-control"
                                                placeholder="Direcci??n" />
                                            <button type="submit" className="btn btn-primary">Enviar</button>
                                        </form>
                                    </div>
                        }
                    </>
            }
        </>
    )
}

export default Checkout