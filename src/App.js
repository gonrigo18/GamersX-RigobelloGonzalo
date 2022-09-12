import React from "react";
import "./index.css";
import NavBar from "./components/Nav/NavBar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import NotFound404 from "./components/NotFound404/NotFound404";
import Cart from "./components/Cart/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";


const App = () => {

  return (

    <CartProvider>
    <BrowserRouter>

      <NavBar />
      <Routes>

        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />


        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<Navigate to="/"/>} />
        <Route path="/error" element={<NotFound404 />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>


    </BrowserRouter>

    </CartProvider>
  );
}

export default App;

