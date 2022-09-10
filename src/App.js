import React from "react";
import "./index.css";
import NavBar from "./components/Nav/NavBar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import NotFound404 from "./components/NotFound404/NotFound404";
import Cart from "./components/Cart/"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContext } from "./Context/CartContext";
import { useState } from "react"

const App = () => {

  const [cart,setCart] = useState([])

  const addToCart = (item) =>{
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  return (

    <CartContext.Provider value={{
       cart,
       addToCart,
       isInCart
    }}>

    <BrowserRouter>

      <NavBar />


      <Routes>

        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/error" element={<NotFound404 />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>


    </BrowserRouter>

    </CartContext.Provider>
  );
}

export default App;

